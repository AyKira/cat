// Sidebar.jsx
import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import catSideBat from "./images/catSideBat.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const styles = {
  sideBar: (theme) => ({
    backgroundColor: theme.palette.common.black,
  }),
  sideCat: {
    width: "120px",
    margin: "0 auto",
    display: "block",
    cursor: "pointer",
  },
};

function Sidebar({ isOpen, toggleDrawer }) {
  return (
    <Drawer open={isOpen} onClose={toggleDrawer(false)} data-testid="side-bar">
      <Link to="/home">
        <img src={catSideBat} style={styles.sideCat} />
      </Link>
      <List>
        <ListItem>
          <Link to="/vote">
            <Button variant="contained" fullWidth sx={styles.sideBar}>
              VOTE
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/breeds">
            <Button variant="contained" fullWidth sx={styles.sideBar}>
              BREEDS
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/image-search">
            <Button variant="contained" fullWidth sx={styles.sideBar}>
              IMAGE/SEARCH
            </Button>
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
