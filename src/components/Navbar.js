import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
export const Navbar = () => {
  return (
    <div>
      <MenuIcon
        sx={{
          display: { md: "none", xs: "flex" },
          alignItems: "center",
          mx: 3,
          my: 4,
        }}
      />
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          mx: 3,
          my: 4,
        }}
      >
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mr: 8,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            TRIPS{" "}
          </Typography>
          <Typography variant="h6" sx={{ mx: 7, fontWeight: 700 }}>
            RECENTLY VIEWED{" "}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            BOOKINGS
          </Typography>
        </Box>
        <Avatar />
      </Box>
    </div>
  );
};
