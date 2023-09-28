// Sidebar.jsx
import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import catSideBat from "./images/catSideBat.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, toggleDrawer }) {
  return (
    <Drawer open={isOpen} onClose={toggleDrawer(false)}>
      <Link to="/home">
        <img
          src={catSideBat}
          style={{
            width: "120px",
            margin: "0 auto",
            display: "block",
            cursor: "pointer",
          }}
        />
      </Link>
      <List>
        <ListItem>
          <Link to="/vote">
            <Button
              variant="contained"
              fullWidth
              style={{ backgroundColor: "black" }}
            >
              VOTE
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/breeds">
            <Button
              variant="contained"
              fullWidth
              style={{ backgroundColor: "black" }}
            >
              {" "}
              BREEDS
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/image-search">
            <Button
              variant="contained"
              fullWidth
              style={{ backgroundColor: "black" }}
            >
              IMAGE/SEARCH
            </Button>
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
