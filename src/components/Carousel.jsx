import { useCryptoContext } from "../context/crypto-context";
import { useEffect, useState } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

const Carousel = () => {
  const { currency, symbol } = useCryptoContext();
  const [trending, setTrending] = useState([]);

  //Fetch
  useEffect(() => {
    const fetchTrendingCoins = async () => {
      const res = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
      );
      setTrending(res.data);
    };
    fetchTrendingCoins();
  }, [currency]);

  const numberCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const items = trending.map((a) => {
    let profit = a.price_change_percentage_24h >= 0;
    return (
      <Link to={`/coins/${a.id}`} className="carouselItem">
        <img
          src={a?.image}
          alt={a?.name}
          height={80}
          style={{ marginBottom: 10 }}
        />
        <span>
          {a?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgba(14,203,129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"} {a?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol}
          {numberCommas(a?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className="carousel">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};
export default Carousel;
