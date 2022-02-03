import { ListItem, styled, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { NWC } from "../assets/utils";

const StyledList = styled("div")(() => ({
  borderTop: `solid ${grey[300]} 1px`,
  borderBottom: `solid ${grey[300]} 1px`,
  marginTop: 20,
  marginRight: 20,
  paddingTop: 20,
  paddingBottom: 50,
}));

const subTotal = 2497;

const proCode = 60;

const esTax = (s, e) => {
  return Math.abs((s * (4.8 / 100)).toFixed(2));
};

const total = (s, e, p) => {
  return s + e - p;
};

localStorage.setItem(
  "total",
  JSON.stringify(total(subTotal, esTax(subTotal), proCode))
);

export const Total = () => {
  return (
    <StyledList>
      <ListItem>
        <Typography sx={{ flexGrow: 1, fontWeight: 700 }}>Subtotal</Typography>
        <Typography sx={{ fontWeight: 700 }}>
          N{NWC(subTotal.toFixed(2))}
        </Typography>
      </ListItem>
      <ListItem>
        <Typography sx={{ flexGrow: 1, fontWeight: 700 }}>
          Estimated TAX
        </Typography>
        <Typography sx={{ fontWeight: 700 }}>
          N{NWC(esTax(subTotal))}
        </Typography>
      </ListItem>
      <ListItem>
        <Typography sx={{ flexGrow: 1, fontWeight: 700 }}>
          Promotional Code: <span style={{ color: "#9e9e9e" }}>Z4KXLM9A</span>
        </Typography>
        <Typography sx={{ fontWeight: 700 }}>-N{NWC(proCode)}</Typography>
      </ListItem>
    </StyledList>
  );
};
