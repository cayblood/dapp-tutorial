import React, { createContext } from "react";

export const { Provider, Consumer } = createContext({
  user: {},
  candidates: [],
  pendingVoters: [],
  vote: candidate => {
    return null;
  },
  approve: voter => {
    return null;
  },
  requestApproval: voter => {
    return null;
  }
});

export default Component => {
  return props => (
    <Consumer>{value => <Component {...props} {...value} />}</Consumer>
  );
};
