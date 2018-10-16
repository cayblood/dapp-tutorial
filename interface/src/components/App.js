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
    user: {
      address: "0x9999",
      admin: true
    },
    candidates: CANDIDATES,
    pendingVoters: ["0x2221", "0x2222", "0x2223", "0x2224", "0x2225"]
  };

  vote = () => {};
  approve = voters => {
    console.log(voters);
  };
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
