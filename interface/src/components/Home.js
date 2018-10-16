import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import CandidatesCard from "./CandidatesCard";

const Home = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Mainframe MeetUp - Voting Dapp
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.main}>
        <CandidatesCard />
      </div>
    </div>
  );
};

const styles = () => ({
  root: {
    minHeight: "100vh",
    flex: 1,
    flexGrow: 1,
    background: "#d3d3d3"
  },
  bar: {
    height: 70
  },
  grow: {
    flexGrow: 1
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  }
});

export default withStyles(styles)(Home);
