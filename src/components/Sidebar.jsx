// Sidebar.jsx
import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import catSideBat from "./images/catSideBat.png";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import { Link, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleClickLink = (href) => () => {
    navigate(href);
    toggleDrawer();
  };

  return (
    <Drawer open={isOpen} onClose={toggleDrawer} data-testid="side-bar">
      <ButtonBase
        onClick={() => alert('mrdko')}
      >
        <img src={catSideBat} style={styles.sideCat} />
      </ButtonBase>
      <List>
        <ListItem>
          <Button variant="contained" fullWidth onClick={handleClickLink('/vote')} sx={styles.sideBar}>
            VOTE
          </Button>
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
