import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Food Saver
        </Typography>
      
        <Button color="inherit" component={Link} to="/food">
          Food Items
        </Button>
        <Button color="inherit" component={Link} to="/teams">
          Collection Team
        </Button>
        <Button color="inherit" component={Link} to="/LOGIN">
          LOGIN
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
