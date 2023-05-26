import { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

export const useCryptoContext = () => useContext(Crypto);

export const CryptoProvider = ({ children }) => {
  const [currency, setCurrency] = useState("usd");
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    if (currency == "usd") {
      setSymbol("$");
    }
    if (currency == "eur") {
      setSymbol("€");
    }
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
};
