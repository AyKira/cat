import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import catSideBat from "../../images/catSideBat.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

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

  function handleClickLink(prop) {
    navigate(prop);
    toggleDrawer();
  }
  //onClose vyvolá akci jako onClick, tkaže udělám to že otočím isOpen na false pres toggleDrawer
  return (
    <Drawer open={isOpen} onClose={toggleDrawer} data-testid="side-bar">
      <Button onClick={() => handleClickLink('/')} data-testid="CAT-BUTTON">
        <img src={catSideBat} style={styles.sideCat} data-testid="cat" />
      </Button>
      <List>
        <ListItem>
          <Button variant="contained" fullWidth onClick={() => handleClickLink('/vote')} data-testid="VOTE" sx={styles.sideBar}>
            VOTE
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="contained" fullWidth onClick={() => handleClickLink('/breeds')} data-testid="BREEDS" sx={styles.sideBar}>
            BREEDS
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="contained" fullWidth onClick={() => handleClickLink('/favorites')} data-testid="IMAGE/SEARCH" sx={styles.sideBar}>
            FAVORITES
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
