import React from "react";
import { AppBar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <AppBar>
      <Box>
        <div className="header">
          <h2>Moj App</h2>
          <Button variant="text">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Map
            </Link>
          </Button>
          <Button variant="text">
            <Link
              to="/table"
              style={{ textDecoration: "none", color: "white" }}
            >
              Table
            </Link>
          </Button>
        </div>
      </Box>
    </AppBar>
  );
}

export default Header;
