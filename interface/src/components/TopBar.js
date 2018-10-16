import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const TopBar = props => {
  const { classes } = props;
  return (
    <AppBar className={classes.bar} position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Mainframe MeetUp - Voting Dapp
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

export default withStyles(styles)(TopBar);
