import React, { useState } from "react";
import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { space } from "../../assets/utils";

const BoxContainer = styled("div")(() => ({
  display: "flex",
  marginBottom: 30,
  justifyContent: "space-between",
}));

const StyledBox = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  marginRight: 20,
}));

const StyledCircle = styled("div")(() => ({
  border: "solid 4px blue",
  width: 5,
  height: 5,
  borderRadius: "50%",
  marginRight: 10,
}));

export const CardForm = () => {
  const [details, setDetails] = useState({
    cardNumber: "4324543393821030",
    expiryDate: "03/24",
    securityCode: "420",
    postalCode: "10119",
  });
  setDetails({ ...details });
  return (
    <div>
      <BoxContainer>
        <StyledBox>
          <Typography variant="caption">Credit card number</Typography>
          <TextField
            type="text"
            sx={{ mt: 1 }}
            size="small"
            value={space(details.cardNumber)}
          />
        </StyledBox>
        <StyledBox>
          <Typography variant="caption">Expiration Date</Typography>
          <TextField
            type="text"
            sx={{ mt: 1 }}
            size="small"
            value={details.expiryDate}
          />
        </StyledBox>
      </BoxContainer>
      <BoxContainer>
        <StyledBox>
          <Typography variant="caption">Security Code</Typography>
          <TextField
            type="text"
            sx={{ mt: 1 }}
            size="small"
            value={details.securityCode}
          />
        </StyledBox>

        <StyledBox>
          <Typography variant="caption">Postal Code</Typography>
          <TextField
            type="text"
            sx={{ mt: 1 }}
            size="small"
            value={details.postalCode}
          />
        </StyledBox>
      </BoxContainer>

      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <StyledCircle />
        <Typography variant="caption">
          Use this card for next time purchase
        </Typography>
      </Box>
      <Button variant="contained" fullWidth size="large">
        Add card
      </Button>
    </div>
  );
};
