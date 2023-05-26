import { Container, Typography } from "@mui/material";

const Banner = () => {
  return (
    <div className="banner">
      <Container className="bannerContent">
        <div className="tagline">
          <Typography
            variant="h2"
            style={{ fontWeight: "bold", marginBottom: 15 }}
          >
            Crypto King
          </Typography>
          <Typography
            variant="subtitle2"
            style={{ color: "darkgrey", textTransform: "capitalize" }}
          >
            get all the info regarding your favotire crypto currency
          </Typography>
        </div>
      </Container>
    </div>
  );
};
export default Banner;
