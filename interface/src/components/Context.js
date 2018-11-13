import React, { createContext } from "react";
import MESSAGES from "../messages";

export const { Provider, Consumer } = createContext({
  messages: MESSAGES.en,
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
