import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const navigationItems = [
  { label: "Home", selected: true },
  { label: "Investment", selected: false },
  { label: "About Us", selected: false },
  { label: "Contact Us", selected: false },
];

export const GroupSubsection = () => {
  const [selectedItem, setSelectedItem] = useState("Home");

  const handleItemClick = (label) => {
    setSelectedItem(label);
  };

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Stack
        direction="row"
        spacing={4}
        sx={{
          alignItems: "center",
          justifyContent: "flex-start",
          height: "120px",
          ml: 30,
        }}
      >
        {navigationItems.map((item) => (
          <Box
            key={item.label}
            onClick={() => handleItemClick(item.label)}
            sx={{
              cursor: "pointer",
              padding: selectedItem === item.label ? "4px 16px" : "4px 0",
              borderRadius: selectedItem === item.label ? "40px" : "0",
              backgroundColor:
                selectedItem === item.label
                  ? "rgba(255, 255, 255, 0.1)"
                  : "transparent",
              transition: "all 0.3s ease",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Kadwa-Bold, Helvetica",
                fontWeight: "bold",
                fontSize: "30px",
                color: "white",
                textAlign: "center",
                lineHeight: "normal",
                letterSpacing: "0",
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};