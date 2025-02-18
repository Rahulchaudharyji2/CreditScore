import React from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom"; 
const Benefits = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", padding: "60px 0" }}>
      <Typography variant="h3" align="center" sx={{ marginBottom: "30px" }}>
        Why Choose Us?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Benefit 1: Personalized Credit Score Monitoring */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: "30px", textAlign: "center", boxShadow: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
              Personalized Credit Score Monitoring
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "20px" }}>
              Keep track of your credit score with real-time updates and personalized advice.
            </Typography>
            <Button variant="contained" color="primary" href="/monitoring">
              Check Now
            </Button>
          </Paper>
        </Grid>
        
        {/* Benefit 2: Tailored Financial Plans */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: "30px", textAlign: "center", boxShadow: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
              Tailored Financial Plans
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "20px" }}>
              Get customized financial plans based on your credit score and financial goals.
            </Typography>
            <Button variant="contained" color="primary" href="/plan">
              Learn More
            </Button>
          </Paper>
        </Grid>

        {/* Benefit 3: Instant Credit Score Simulation */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: "30px", textAlign: "center", boxShadow: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
              Instant Credit Score Simulation
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "20px" }}>
              Simulate your credit score with ease to plan your financial future better.
            </Typography>
            <Button variant="contained" color="primary" href="/simulation">
              Try It Now
            </Button>
          </Paper>
        </Grid>

        {/* Benefit 4: Real-Time Alerts & Notifications */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: "30px", textAlign: "center", boxShadow: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
              Real-Time Alerts & Notifications
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "20px" }}>
              Receive timely alerts on your credit score changes and account activity.
            </Typography>
            <Button variant="contained" color="primary" href="/alerts">
              Set Up Alerts
            </Button>
          </Paper>
        </Grid>

        {/* Benefit 5: Secure Transactions */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: "30px", textAlign: "center", boxShadow: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
              Secure Transactions
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "20px" }}>
              All your transactions and data are secured with top-notch encryption protocols.
            </Typography>
            <Button variant="contained" color="primary" href="/transaction">
              Explore Now
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Benefits;
