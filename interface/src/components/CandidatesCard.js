import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";

import Candidate from "./Candidate";

import applyContext from "./Context";

class CadidatesCard extends Component {
  render() {
    const { classes, candidates } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.title}>
            Candidatos à presidência da república
          </Typography>
          <List>
            {candidates.map((item, index) => (
              <Candidate
                key={`candidate-${index}`}
                name={item.name}
                votes={item.votes}
              />
            ))}
          </List>
        </CardContent>
      </Card>
    );
  }
}
const styles = () => ({
  title: {
    padding: "20px 0"
  },
  card: {
    marginTop: 20,
    minWidth: 275,
    width: "80vw"
  }
});

const CadidatesCardStyled = withStyles(styles)(CadidatesCard);

export default applyContext(CadidatesCardStyled);
