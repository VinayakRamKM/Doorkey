import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import boyimage from "./image5.png";

export const OverlapGroupWrapperSubsection = () => {
  return (
    <Box
      sx={{ position: "relative", width: "100%", maxWidth: 700, height: 800 }}
    >
      <Card
        sx={{
          position: "absolute",
          width: 510,
          height: 510,
          top: 155,
          left: 230,
          backgroundColor: "#f5f5f5",
          borderRadius: 2,
          boxShadow: 2,
        }}
      />

      <Avatar
        src={boyimage}
        alt="Profile Image"
        sx={{
          width: 280,
          height: 280,
          position: "absolute",
          top: 0,
          left: 340,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 269,
          height: 193,
          top: 350,
          left: 350,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Kadwa-Bold, Helvetica",
            fontWeight: "bold",
            color: "black",
            fontSize: "64px",
            lineHeight: "normal",
            mb: 1,
          }}
        >
          Name
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontFamily: "Kadwa-Bold, Helvetica",
            fontWeight: "bold",
            color: "black",
            fontSize: "48px",
            lineHeight: "normal",
          }}
        >
          Industry
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          width: 433,
          height: 96,
          top: 550,
          left: 280,
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: 431,
            height: 87,
            backgroundColor: "#142c50",
            borderRadius: "70px",
            fontSize: "48px",
            fontFamily: "Kadwa-Bold, Helvetica",
            fontWeight: "bold",
            color: "white",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#0f1f3a",
            },
          }}
        >
          Connect
        </Button>
      </Box>
    </Box>
  );
};