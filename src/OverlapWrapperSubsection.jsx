import LinkedIn from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";
import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const OverlapWrapperSubsection = () => {
  const footerLinks = [
    { text: "About", href: "#" },
    { text: "Careers", href: "#" },
    { text: "Press", href: "#" },
  ];

  const footerRightLinks = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms Of Service", href: "#" },
    { text: "Cookie Policy", href: "#" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: "url(/rectangle-165.svg)",
        backgroundSize: "100% 100%",
        py: 8,
        px: 4,
      }}
    >
      <Box sx={{ maxWidth: 1818, mx: "auto",mt: 15 }}>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Stack spacing={4} sx={{ alignItems: "flex-start", textAlign: "left", px: { xs: 2, md: 0 } }}>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 300,
                  color: "white",
                  fontSize: { xs: "48px", md: "64px" },
                  textAlign: "left",
                  lineHeight: 1.2,
                  backgroundColor: "#0c44b8",
                  borderRadius: "8px",
                  px: 2,
                  py: 1,
                  display: "inline-block",
                }}
              >
                CONTACT US
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 300,
                  color: "white",
                  fontSize: { xs: "48px", md: "64px" },
                  lineHeight: 1.2,
                  backgroundColor: "#0c44b8",
                  borderRadius: "8px",
                  px: 2,
                  py: 1,
                  display: "inline-block",
                }}
              >
                Some fluff about please reach out to us and stuff
              </Typography>

              <Stack direction="row" spacing={2} sx={{ pt: 4 }}>
                <LinkedIn
                  sx={{
                    fontSize: 58,
                    color: "white",
                    cursor: "pointer",
                    "&:hover": { opacity: 0.8 },
                  }}
                />
                <Twitter
                  sx={{
                    fontSize: 48,
                    color: "white",
                    cursor: "pointer",
                    "&:hover": { opacity: 0.8 },
                  }}
                />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor:
                  "linear-gradient(180deg, rgba(4,27,75,1) 10%, rgba(9,71,205,1) 90%, #d9d9d9 0%)",
                borderRadius: "48px",
                p: 4,
                height: "fit-content",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  color: "white",
                  fontSize: "40px",
                  textAlign: "center",
                  mb: 6,
                  lineHeight: 1.2,
                  backgroundColor: "#0c44b8",
                  borderRadius: "8px",
                  px: 2,
                  py: 1,
                  display: "inline-block",
                }}
              >
                GET IN TOUCH WITH US!
              </Typography>

              <Stack spacing={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: 300,
                        color: "white",
                        fontSize: "20px",
                        mb: 1,
                        backgroundColor: "#0c44b8",
                        borderRadius: "6px",
                        px: 1,
                        py: 0.5,
                        display: "inline-block",
                      }}
                    >
                      Full name
                    </Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "#f6fff4",
                          borderRadius: "11px",
                          height: "57px",
                          "& fieldset": {
                            borderColor: "#28569c",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: 300,
                        color: "white",
                        fontSize: "20px",
                        mb: 1,
                        backgroundColor: "#0c44b8",
                        borderRadius: "6px",
                        px: 1,
                        py: 0.5,
                        display: "inline-block",
                      }}
                    >
                      Company
                    </Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "#f6fff4",
                          borderRadius: "11px",
                          height: "57px",
                          "& fieldset": {
                            borderColor: "#28569c",
                          },
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 300,
                      color: "white",
                      fontSize: "20px",
                      mb: 1,
                      backgroundColor: "#0c44b8",
                      borderRadius: "6px",
                      px: 1,
                      py: 0.5,
                      display: "inline-block",
                    }}
                  >
                    Email
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#f6fff4",
                        borderRadius: "11px",
                        height: "57px",
                        "& fieldset": {
                          borderColor: "#28569c",
                        },
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 300,
                      color: "white",
                      fontSize: "20px",
                      mb: 1,
                      backgroundColor: "#0c44b8",
                      borderRadius: "6px",
                      px: 1,
                      py: 0.5,
                      display: "inline-block",
                    }}
                  >
                    Address
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#f6fff4",
                        borderRadius: "11px",
                        height: "57px",
                        "& fieldset": {
                          borderColor: "#28569c",
                        },
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 300,
                      color: "white",
                      fontSize: "20px",
                      mb: 1,
                      backgroundColor: "#0c44b8",
                      borderRadius: "6px",
                      px: 1,
                      py: 0.5,
                      display: "inline-block",
                    }}
                  >
                    Note
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#f6fff4",
                        borderRadius: "11px",
                        "& fieldset": {
                          borderColor: "#28569c",
                        },
                      },
                    }}
                  />
                </Box>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#06235d",
                    borderRadius: "16px",
                    height: "32px",
                    width: "179px",
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: "14px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#04193d",
                    },
                  }}
                >
                  SEND MESSAGE
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "white", mb: 4 }} />

        <Box component="footer" sx={{ py: 4 }}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Stack spacing={2}>
                {footerLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 300,
                      color: "#f6fff4",
                      fontSize: "32px",
                      textDecoration: "none",
                      lineHeight: "100px",
                      "&:hover": {
                        opacity: 0.8,
                      },
                    }}
                  >
                    {link.text}
                  </Link>
                ))}
              </Stack>
            </Grid>
            <Grid item>
              <Stack spacing={2}>
                {footerRightLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 300,
                      color: "#f6fff4",
                      fontSize: "32px",
                      textDecoration: "none",
                      lineHeight: "100px",
                      "&:hover": {
                        opacity: 0.8,
                      },
                    }}
                  >
                    {link.text}
                  </Link>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};