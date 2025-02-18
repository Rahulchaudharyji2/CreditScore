import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1e3a8a", color: "white", padding: "30px 0" }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ marginBottom: "10px" }}>
              About Us
            </Typography>
            <Typography variant="body2">
              Our Credit Card provides the best in rewards, travel, and financial support.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ marginBottom: "10px" }}>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" sx={{ display: "block", marginBottom: "5px" }}>
              Terms and Conditions
            </Link>
            <Link href="#" color="inherit" sx={{ display: "block", marginBottom: "5px" }}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" sx={{ display: "block", marginBottom: "5px" }}>
              FAQ
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ marginBottom: "10px" }}>
              Follow Us
            </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <Link href="#" color="inherit">
                  <Facebook />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit">
                  <Twitter />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit">
                  <Instagram />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit">
                  <LinkedIn />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Typography variant="body2">© 2025 Credit Card Company. All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
