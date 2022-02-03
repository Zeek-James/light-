import { Box, styled, Typography } from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import { useSelector } from "react-redux";
import React from "react";
import chip from "../../assets/img/chip.png";
import { space } from "../../assets/utils";

const StyledCard = styled("div")(() => ({
  background: "linear-gradient(to bottom left, #3366ff 12%, #ff3300 100%)",
  color: "#fff",
  height: 250,
  width: 400,
  borderRadius: 5,
  paddingLeft: 25,
  marginBottom: 30,
  paddingTop: 10,
}));

const StyledBox = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  marginRight: 20,
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  height: "100%",
}));

const StyledDiv = styled("div")(() => ({
  marginLeft: -30,
  display: "flex",
  alignItems: "center",
}));

const StyledCircle = styled("div")(() => ({
  borderRadius: "50%",
  height: 40,
  width: 40,
}));

export const Card = () => {
  const { cardNumber, expirationDate, firstName, lastName } = useSelector(
    (state) => state
  );

  return (
    <StyledCard>
      <StyledBox sx={{ pl: 1 }}>
        <Typography variant="caption">CARD NUMBER</Typography>
        <Typography variant="caption">
          {cardNumber ? space(cardNumber) : ""}
        </Typography>
        <StyledDiv>
          <WifiIcon sx={{ transform: "rotate(90deg)" }} />
          <img
            src={chip}
            alt="chip"
            style={{
              height: 40,
              objectFit: "contain",
              borderRadius: 10,
              marginLeft: 5,
            }}
          />
        </StyledDiv>
        <Typography variant="caption">EXPIRATION DATE</Typography>

        <Typography variant="caption">
          {expirationDate
            ? `${expirationDate.month} / ${expirationDate.year}`
            : ""}
        </Typography>
        <Box sx={{ display: "flex", width: 350, alignItems: "center" }}>
          <Typography variant="caption" sx={{ flexGrow: 1 }}>
            {firstName} {lastName}
          </Typography>

          <StyledCircle
            sx={{
              background: "red",
              position: "relative",
              left: 15,
              opacity: 0.7,
            }}
          />
          <StyledCircle
            sx={{
              background: "orange",
            }}
          />
        </Box>
      </StyledBox>
    </StyledCard>
  );
};
