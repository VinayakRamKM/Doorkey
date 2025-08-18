import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import image9 from "./image 9.png";

export const OverlapGroupSubsection = () => {
  return (
    <Box
      sx={{ width: "100%", maxWidth: 700, height: 800, position: "relative" }}
    >
      <Card
        sx={{
          position: "absolute",
          top: 850,   
          left: -410,
          width: 530,
          height: 540,
          borderRadius: 2,
          boxShadow: 3,
          overflow: "visible",
        }}
      >
        <CardContent sx={{ padding: 0, height: "100%", position: "relative" }}>
          <Stack
            spacing={3}
            alignItems="center"
            sx={{
              height: "100%",
              paddingTop: 18,
              paddingX: 2,
            }}
          >
            <Avatar
              src={image9}
              alt="Profile Image"
              sx={{
                width: 280,
                height: 280,
                position: "absolute",
                top: -145,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />

            <Box sx={{ marginTop: "200px" }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Kadwa-Bold, Helvetica",
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "64px",
                  textAlign: "center",
                  lineHeight: "normal",
                }}
              >
                Name
                <br />
                Industry
              </Typography>
            </Box>

            <Box
              sx={{ position: "absolute", bottom: 50, width: 433, height: 150 }}
            >
              <Box sx={{ position: "relative", width: 431, height: 196 }}>
                <Button
                  variant="contained"
                  sx={{
                    position: "absolute",
                    width: 431,
                    height: 88,
                    top: 54,
                    left: 0,
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
                      textAlign: "center",
                    }}
                  >
                    Connect
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};