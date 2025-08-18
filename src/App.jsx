import image from "@mui/icons-material/Star";
import line22 from "@mui/icons-material/Star";
import line23 from "@mui/icons-material/Star";
import vector from "./vector.png";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { DivSubsection } from "./DivSubsection";
import { GroupSubsection } from "./GroupSubsection";
import { GroupWrapperSubsection } from "./GroupWrapperSubsection";
import { OverlapGroupWrapperSubsection } from "./OverlapGroupWrapperSubsection";
import { OverlapGroupSubsection } from "./OverlapGroupSubsection";
import { OverlapWrapperSubsection } from "./OverlapWrapperSubsection";
//import { SectionComponentNodeSubsection } from "./SectionComponentNodeSubsection";
import doorkeyCopy1 from "./doorkey-copy-1.png";
import doorkeyCopy2 from "./doorkey-copy-2.png";
import image2 from "./image-2.png";
import image17 from "./image-17.png";
import image18 from "./image-18.png";
import image19 from "./image-19.png";
import image20 from "./image-20.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function BoxComponent() {
  return (
    <Box sx={{ width: "92%", minHeight: "100vh" }}>
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(4,27,75,1) 3%, rgba(9,71,205,1) 7%, rgba(246,255,244,1) 15%)",
          position: "relative",
          width: "110%",
          minHeight: "100vh",
        }}
      >
        {/* Header Section with Logo and User Profile */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            pt: 5,
            px: 4,
            position: "relative",
          }}
        >
          {/* Left: Logo */}
          <Box sx={{ width: "135px", display: "flex", justifyContent: "flex-start" }}>
            <img
              src={doorkeyCopy1}
              alt="Doorkey copy"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
            />
          </Box>
          {/* Center: GroupSubsection */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center",mt: "auto" }}>
            <GroupSubsection />
          </Box>
          {/* Right: Vector */}
          {/* <Box sx={{ width: "80px", display: "flex", justifyContent: "flex-end" }}>
            <img
              src={vector}
              alt="Right"
              style={{
                width: "60px",
                height: "60px",
                objectFit: "contain",
              }}
            />
          </Box> */}
        </Box>

        {/* Home Section */}
        <Container maxWidth={false} sx={{ px: 4, mt: 8 }}>
          <Stack
            spacing={3}
            alignItems="flex-start" // align items to the right
            sx={{ position: "relative" }}
          
          >
            <Typography
              sx={{
                fontFamily: "Jersey_25-Regular, Helvetica",
                fontSize: "48px",
                color: "white",
                textAlign: "left", // text to the right
                height: "40px",
              }}
            >
              Home
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter-Regular, Helvetica",
                fontSize: "36px",
                color: "#f6fff4",
                textAlign: "left", // text to the right
                height: "85px",
              }}
            >
              Welcome back, Rahul
            </Typography>

            {/* Activity Dropdown */}
            <Box
              sx={{
                width: "270px",
                height: "35px",
                backgroundColor: "#d9d9d9",
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start", // content to the right
                mt: 4,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter-Regular, Helvetica",
                  fontSize: "24px",
                  color: "black",
                  textAlign: "center", // text to the right
                  width: "100%",
                  height: "35px",
                }}
              >
                Activity: This month
              </Typography>
            </Box>

            {/* Charts Section */}
            <Grid container spacing={4} sx={{ mt: 4, justifyContent: 'center'}}>
              <Grid item xs={15} md={4}>
                <img
                  src={image17}
                  alt="Chart 1"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "block",
                  }}
                />
              </Grid>
              <Grid item xs={15} md={4}>
                <img
                  src={image18}
                  alt="Chart 2"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "block",
                  }}
                />
              </Grid>
              <Grid item xs={15} md={4}>
                <img
                  src={image19}
                  alt="Chart 3"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "block",
                  }}
                />
              </Grid>
            </Grid>

            {/* Large Dashboard Image */}
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
              <img
                src={image20}
                alt="Dashboard"
                style={{
                  width: "100%",
                  height: "498px",
                  objectFit: "block",
                }}
              />
            </Box>
          </Stack>
        </Container>

        {/* Subsections */}
        {/* REMOVE or COMMENT OUT these lines below */}
        {/* <OverlapWrapperSubsection /> */}
        {/* <OverlapGroupWrapperSubsection /> */}
        {/* <GroupWrapperSubsection /> */}
        {/* <DivSubsection /> */}
        {/* <SectionComponentNodeSubsection /> */}

        {/* Explore Entrepreneurs Section */}
        <Box sx={{ mt: 8, textAlign: "center", position: "relative" }}>
          {/* <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <img
              src={line22}
              alt="Line"
              style={{
                width: "50%",
                height: "50%",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <img
              src={line23}
              alt="Line"
              style={{
                width: "50%",
                height: "50%",
              }}
            />
          </Box> */}

          <Box
          sx={{
            height: "3px",
            width: "60%",
            backgroundColor: "#0c44b8",
            margin: "0 auto 20px auto", // center & add space below
            }}
            />

          <Typography
            sx={{
              fontFamily: "Kadwa-Bold, Helvetica",
              fontWeight: "bold",
              fontSize: "64px",
              color: "#0c44b8",
              textAlign: "center",
            }}
          >
            Explore Entrepreneurs
          </Typography>

           <Box
           sx={{
            height: "3px",
            width: "60%",
            backgroundColor: "#0c44b8",
            margin: "20px auto 0 auto", // center & add space above
                }}
                />

          {/* 2x2 Grid for Smaller Cards */}
          <Grid container spacing={4} sx={{ mt: 4, maxWidth: 480, mx: "auto" }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ maxWidth: 180, height: 120, mx: "auto" }}>
                <DivSubsection />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ maxWidth: 180, height: 120, mx: "auto" }}>
                <GroupWrapperSubsection />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ maxWidth: 180, height: 120, mx: "auto" }}>
                <OverlapGroupWrapperSubsection />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ maxWidth: 180, height: 120, mx: "auto" }}>
                <OverlapGroupSubsection />
              </Box>
            </Grid> 
          </Grid>
        </Box>

        {/* Contact Section - move this BELOW the Explore Entrepreneurs section */}
        
        <Box sx={{ mt: 165, textAlign: "center", position: "relative", backgroundColor: "#0c44b8", color: "white", py: 8 }}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            {/* Left: Contact Info */}
            <Grid item xs={12} md={6} pr={{ md: 8 }}>
              <Box sx={{ textAlign: "left", pl: { xs: 2, md: 4 } }}>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: "40px",
                    color: "white",
                    mb: 2,
                    backgroundColor: "#0c44b8",
                    borderRadius: "8px",
                    px: 1,
                    py: 0,
                    display: "inline-block",
                  }}
                >
                  CONTACT US
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "20px",
                    color: "white",
                    mb: 4,
                    backgroundColor: "#0c44b8",
                    borderRadius: "8px",
                    px: 19,
                    py: 1,
                    position: "relative", // allow manual positioning
                    top: "2px",           // move it down
                    left: "-145px", 
                  }}
                >
                  Some fluff about please reach out to us and stuff
                </Typography>
                <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                  <LinkedInIcon sx={{ width: 48, height: 48, color: "white", cursor: "pointer" }} />
                  <TwitterIcon sx={{ width: 48, height: 48, color: "white", cursor: "pointer" }} />
                </Box>
              </Box>
            </Grid>

            {/* Right: Get in Touch Form */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  background: "white",
                  borderRadius: "24px",
                  p: 4,
                  color: "white",
                  maxWidth: 400,
                  mx: "auto",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: "32px",
                    color: "#0c44b8",
                    mb: 3,
                    textAlign: "left",
                  }}
                >
                  GET IN TOUCH WITH US!
                </Typography>
                <Stack spacing={2}>
                  <input placeholder="Full name" style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc", backgroundColor: "white",
      outline: "none" }} />
                  <input placeholder="Company" style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc", backgroundColor: "white",
      outline: "none" }} />
                  <input placeholder="Email" style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc", backgroundColor: "white",
      outline: "none" }} />
                  <input placeholder="Address" style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc", backgroundColor: "white",
      outline: "none" }} />
                  <textarea placeholder="Note" rows={3} style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc", backgroundColor: "white",
      outline: "none" }} />
                  <button style={{
                    background: "#06235d",
                    color: "white",
                    border: "none",
                    borderRadius: 8,
                    padding: "12px 24px",
                    fontWeight: 700,
                    cursor: "pointer"
                  }}>
                    SEND MESSAGE
                  </button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>

         <Box
    sx={{
      position: "absolute",
      bottom: "190px", // adjust so it sits between Contact & Footer
      left: "50%",
      transform: "translateX(-50%)",
      width: "85%",
      height: "3px",
      backgroundColor: "#ccc",
      opacity: 1,
    }}
  />

        

        {/* Footer Section */}
        <Box
          component="footer"
          sx={{
            backgroundColor: "#0c44b8",
            color: "white",
            py: 4,
            mt: 0,
            borderTop: "1px solid #28569c",
          }}
        >
          <Grid container justifyContent="space-between" sx={{ maxWidth: 900, mx: "auto" }}>
            <Grid item>
              <Stack spacing={2}>
                <Typography
                  component="a"
                  href="#"
                  sx={{
                    color: "white",
                    fontSize: "20px",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  About
                </Typography>
                <Typography
                  component="a"
                  href="#"
                  sx={{
                    color: "white",
                    fontSize: "20px",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Careers
                </Typography>
                <Typography
                  component="a"
                  href="#"
                  sx={{
                    color: "white",
                    fontSize: "20px",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Press
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack spacing={2}>
                <Typography
                  component="a"
                  href="#"
                  sx={{
                    color: "white",
                    fontSize: "20px",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Privacy Policy
                </Typography>
                <Typography
                  component="a"
                  href="#"
                  sx={{
                    color: "white",
                    fontSize: "20px",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Terms Of Service
                </Typography>
                <Typography
                  component="a"
                  href="#"
                  sx={{
                    color: "white",
                    fontSize: "20px",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Cookie Policy
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}