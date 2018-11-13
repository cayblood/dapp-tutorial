import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import applyContext from "./Context";

const TopBar = props => {
  const { classes, messages } = props;
  return (
    <AppBar className={classes.bar} position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {messages.dappName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const styles = () => ({
  bar: {
    height: 70
  },
  grow: {
    flexGrow: 1
  }
});

const TopBarStyled = withStyles(styles)(TopBar);
export default applyContext(TopBarStyled);
