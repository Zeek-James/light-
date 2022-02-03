import { Box, Grid, styled, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { Total } from "../Total";
import { Card } from "./Card";
import { CardForm } from "./CardForm";
import visa from "../../assets/img/visa.jpg";

const PaymentContainer = styled("div")(() => ({
  borderTop: `1px solid ${grey[300]}`,
  paddingTop: 40,
  paddingBottom: 40,
  marginTop: 100,
}));

export const Payment = () => {
  return (
    <PaymentContainer>
      <Box sx={{ marginBottom: 3, display: "flex", alignItems: "center" }}>
        <div>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Payment Information
          </Typography>
          <Typography variant="caption" sx={{ color: grey[500] }}>
            Choose yor method of payment
          </Typography>
        </div>
        <div style={{ flexGrow: 1 }} />
        <Box
          sx={{
            mr: 8,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
          }}
        >
          <img
            src={visa}
            style={{ height: 35, objectFit: "contain", marginRight: 20 }}
            alt="visa"
          />
          <img
            src="https://webadt.com/wp-content/themes/ADT/img/discover_over.png"
            alt="visa"
            style={{ width: 55, objectFit: "contain" }}
          />
        </Box>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaBal-npAPWC3ral_bEEgMXJLq1PjxfFnxIQ&usqp=CAU"
          alt="paypal"
          style={{ height: 65, objectFit: "contain" }}
        />
      </Box>
      <Grid container display="flex" justifyContent="space-between" spacing={5}>
        <Grid item xs="12" md="6">
          <Card />
        </Grid>
        <Grid item xs="12" md="6">
          <CardForm />
        </Grid>
      </Grid>

      <Total />
    </PaymentContainer>
  );
};
