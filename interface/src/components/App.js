import React, { Component } from "react";

import { Provider } from "./Context";

import Home from "./Home";

const CANDIDATES = [
  { name: "Didi", votes: 2 },
  { name: "Zacarias", votes: 2 },
  { name: "Dedé", votes: 2 },
  { name: "Mussum", votes: 2 }
];

export default class AppProvider extends Component {
  state = {
    user: {},
    candidates: CANDIDATES,
    pendingVoters: []
  };

  vote = () => {};
  approve = () => {};
  requestApproval = voter => {};

  render() {
    return (
      <Provider
        value={{
          vote: this.vote,
          approve: this.approve,
          requestApproval: this.requestApproval,
          ...this.state
        }}
      >
        <Home />
      </Provider>
    );
  }
}
