pragma solidity ^0.4.24;

import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';

contract Election is Ownable {
  struct Candidate {
      bytes32 name;
      uint voteCount;
  }
  Candidate[] public candidates;
  function addCandidate(bytes32 name) public onlyOwner {
    candidates.push(Candidate({
      name: name,
      voteCount: 0
    }));
  }
}
