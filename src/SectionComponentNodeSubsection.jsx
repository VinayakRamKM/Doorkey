import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";

export const SectionComponentNodeSubsection = () => {
  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Card
        sx={{
          width: "100%",
          maxWidth: 700,
          height: 500,
          mx: "auto",
          position: "relative",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 326,
            height: 326,
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            src="./image 5.png"
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 364,
            left: "50%",
            transform: "translateX(-50%)",
            width: 341,
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
            }}
          >
            Name
            <br />
            Industry
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 587,
            left: "50%",
            transform: "translateX(-50%)",
            width: 433,
            height: 196,
          }}
        >
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              top: 54,
              left: 0,
              width: 431,
              height: 88,
              backgroundColor: "#142c50",
              borderRadius: "70px",
              "&:hover": {
                backgroundColor: "#0f1f3a",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Kadwa-Bold, Helvetica",
                fontWeight: "bold",
                color: "white",
                fontSize: "48px",
                textTransform: "none",
              }}
            >
              Connect
            </Typography>
          </Button>
        </Box>
      </Card>

      <Box sx={{ mt: 8, textAlign: "center", position: "relative" }}>
        {/* Top line */}
        <Box
          sx={{
            width: "fit-content",
            mx: "auto",
            mb: 2,
          }}
        >
          <Box
            sx={{
              height: "5px",
              width: "100%",
              background: "#0c44b8",
              borderRadius: "3px",
              minWidth: "400px", // adjust as needed
              maxWidth: "100%",
              margin: "0 auto",
            }}
          />
        </Box>

        {/* Main text */}
        <Typography
          sx={{
            fontFamily: "Kadwa-Bold, Helvetica",
            fontWeight: "bold",
            fontSize: "64px",
            color: "#0c44b8",
            textAlign: "center",
            display: "inline-block",
            px: 4,
          }}
        >
        
        </Typography>

        {/* Bottom line
        <Box
          sx={{
            width: "fit-content",
            mx: "auto",
            mt: 2,
          }}
        > */}
          <Box
            sx={{
              height: "5px",
              width: "100%",
              background: "#0c44b8",
              borderRadius: "3px",
              minWidth: "400px", // adjust as needed
              maxWidth: "100%",
              margin: "0 auto",
            }}
          />
        </Box>

        {/* ...rest of your Explore Entrepreneurs section... */}
      </Box>
    // </Box>
  );
};