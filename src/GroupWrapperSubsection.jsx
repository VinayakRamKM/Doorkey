import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import boyimage from "./image 9.png";

export const GroupWrapperSubsection = () => {
  return (
    <Box
      sx={{ position: "absolute", top: 175, left: 100, width: "100%", maxWidth: 700, height: 800, padding: 2 }}
    >
      <Stack alignItems="center" spacing={0}>
        <Box
          component="img"
          src={boyimage}
          alt="Profile Image"
          sx={{
            width: 280,
            height: 280,
            borderRadius: "50%",
            objectFit: "cover",
            zIndex: 2,
            position: "relative",
          }}
        />

        <Box
          sx={{
            width: 500,
            height: 300,
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
            marginTop: "-140px",
            paddingTop: "180px",
            paddingX: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 4,
          }}
        >
          <Stack alignItems="center" spacing={1} sx={{ marginTop: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Kadwa-Bold, Helvetica",
                fontWeight: "bold",
                fontSize: "64px",
                color: "black",
                textAlign: "center",
                lineHeight: "normal",
              }}
            >
              Name
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Kadwa-Bold, Helvetica",
                fontWeight: "bold",
                fontSize: "48px",
                color: "black",
                textAlign: "center",
                lineHeight: "normal",
              }}
            >
              Industry
            </Typography>
          </Stack>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#142c50",
              color: "white",
              fontSize: "48px",
              fontFamily: "Kadwa-Bold, Helvetica",
              fontWeight: "bold",
              borderRadius: "70px",
              width: 431,
              height: 87,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#0f1f3a",
              },
            }}
          >
            Connect
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};