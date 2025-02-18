import React from "react";
import { Link, useNavigate } from "react-router-dom";  // Import useNavigate
import { Button, AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  const navigate = useNavigate();  // Get navigate function
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');  // Use navigate for redirection
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#185F81", padding: "3px" }} className="bg-sky-500/100 ...">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} >Credit Score Platform</Typography>
        {token ? (
          <>
            <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
            <Button color="inherit" component={Link} to="/monitoring">Monitoring</Button>
            <Button color="inherit" component={Link} to="/simulation">Simulate Score</Button>
            <Button color="inherit" component={Link} to="/plan">Personalized Plan</Button>
            <Button color="inherit" component={Link} to="/transaction">Transactions</Button>
            <Button color="inherit" component={Link} to="/alerts">Alerts</Button>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
