import { Box, Button, Container, Typography } from "@mui/material";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { NWC } from "./assets/utils";
import { Payment } from "./components/payment-info/Payment";
import { getDetails } from "./store/action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails());
  }, [dispatch]);

  const getTotal = localStorage.getItem("total");

  const total = JSON.parse(getTotal);

  return (
    <div className="App">
      <Navbar />

      <Container>
        <Payment />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <Button variant="contained" size="large">
            Complete payment
          </Button>
          <Typography sx={{ fontWeight: 900 }}>
            Total: <span>N{NWC(total)}</span>
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default App;
