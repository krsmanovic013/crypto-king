import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";

import { useCryptoContext } from "../context/crypto-context";

const Header = () => {
  const { currency, setCurrency } = useCryptoContext();
  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography className="title">Crypto King</Typography>
          <Select
            variant="outlined"
            style={{ width: 100, height: 40, marginLeft: 15 }}
            value={currency}
            className="contrast"
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value="usd">USD</MenuItem>
            <MenuItem value="eur">EUR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
