import React, { useEffect, useState } from "react";
import { Button, Typography, Container, Grid, Box } from "@mui/material";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; 
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box
      sx={{
        backgroundImage:
          "url('/banner.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography variant="h2" sx={{ fontWeight: 700, textAlign: "left" }}>
                Unlock Your Financial Freedom
              </Typography>
              <Typography variant="h5" sx={{ marginBottom: "20px", textAlign: "left" }}>
                Apply for our Credit Card with exclusive benefits and rewards.
              </Typography>
              <Box sx={{ textAlign: "left" }}>
                <Button variant="contained" color="primary" sx={{ marginRight: "10px",  borderRadius:"13px"}}>
                  Apply Now
                </Button>
                <Button variant="outlined" color="inherit"  href="/monitoring" sx={{borderRadius:"13px"}}>
                  Learn More
                </Button >
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}></Grid> {/* Empty grid for spacing */}
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;