import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
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
      sx={(theme) => styles.appBar(theme)}
    >
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <img src={catLogo} style={styles.catImage} />
        <img src={catMiddle} style={styles.catLogo} />
        <img src={catLogoMirror} style={styles.catImage} />
      </Toolbar>
    </AppBar>
  );
}

export default myAppBar;
