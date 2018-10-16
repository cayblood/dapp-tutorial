import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Badge from "@material-ui/core/Badge";

const Candidate = ({ classes, name, votes }) => (
  <>
    <Divider />
    <Badge
      color="primary"
      badgeContent={votes}
      classes={{ badge: classes.badge }}
    >
      <Typography component="div" className={classes.candidate}>
        {name}
      </Typography>
    </Badge>
  </>
);

const styles = theme => ({
  badge: {
    top: 10,
    right: "auto",
    left: 0
  },
  candidate: {
    padding: `10px 0 10px ${theme.spacing.unit * 4}px  `
  }
});

const CandidateWithStyles = withStyles(styles)(Candidate);

export default CandidateWithStyles;
