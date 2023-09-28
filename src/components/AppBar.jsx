import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import catLogo from "./images/catLogo.png";
import catLogoMirror from "./images/catLogoMirror.png";
import catMiddle from "./images/catMiddle.png";

const styles = {
  appBar: (theme) => ({
    backgroundColor: theme.palette.common.black,
  }),
  catImage: {
    width: 240,
  },
  catLogo: {
    width: 180,
  },
};

function myAppBar({ toggleDrawer }) {
  return (
    <AppBar
      position="static"
      onClick={toggleDrawer(true)}
      // onClick={() => {toggleDrawer(true); console.log("test"); }} proč tohle nefunguje
      sx={styles.appBar}
      data-testid="app-bar"
    >
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <img src={catLogo} style={styles.catImage} data-testid="cat-logo" />
        <img src={catMiddle} style={styles.catLogo} data-testid="cat-middle" />
        <img
          src={catLogoMirror}
          style={styles.catImage}
          data-testid="cat-logo-mirror"
        />
      </Toolbar>
    </AppBar>
  );
}

export default myAppBar;
