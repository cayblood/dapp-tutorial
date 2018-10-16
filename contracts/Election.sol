pragma solidity ^0.4.24;

import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';

contract Election is Ownable {
  struct Candidate {
      bytes32 name;
      uint voteCount;
  }
  mapping(bytes32 => Candidate) candidates;
  bytes32[] candidateNames;

  struct Voter {
    uint weight;
    bool voted;
  }
  mapping(address => Voter) voters;
  mapping(address => bool) voterLookup;
  address[] registrations;

  function addCandidate(bytes32 name) public onlyOwner {
    Candidate memory candidate;
    candidate.name = name;
    candidate.voteCount = 0;
    candidates[name] = candidate;
    candidateNames.push(name);
  }

  function getCandidateCount() public constant returns (uint) {
    return candidateNames.length;
  }

  function getCandidateNameForIndex(uint index) public constant returns (bytes32) {
    if (index >= candidateNames.length) {
      revert('No candidate at that index.');
    }
    return candidateNames[index];
  }

  function registerVoter() public {
    Voter memory voter;
    voter.weight = 0;
    voter.voted = false;
    voterLookup[msg.sender] = true;
    voters[msg.sender] = voter;
    registrations.push(msg.sender);
  }

  function getRegistrationCount() public constant returns (uint) {
    return registrations.length;
  }

  function getRegistrationForIndex(uint index) public constant returns (address) {
    if (index >= registrations.length) {
      revert('No registration at that index.');
    }
    return registrations[index];
  }

  function approveRegistration(address voterAddr) public onlyOwner {
    voters[voterAddr].weight = 1;
  }

  function approveRegistrations(address[] voterAddresses) public onlyOwner {
    for (uint i = 0; i < voterAddresses.length; i++) {
      approveRegistration(voterAddresses[i]);
    }
  }

  function voterIsRegistered(address voterAddr) public constant returns(bool) {
    return voterLookup[voterAddr];
  }

  function registrationIsApproved(address voterAddr) public constant returns(bool) {
    return voters[voterAddr].weight == 1;
  }

  function voterHasVoted(address voterAddr) public constant returns(bool) {
    return voters[voterAddr].voted;
  }

  function voteForCandidate(bytes32 name) public returns(uint) {
    if (candidates[name].name != name) {
      revert('No candidate found with that name.');
    }
    uint voteCount = candidates[name].voteCount;
    if (!voters[msg.sender].voted) {
      candidates[name].voteCount += voters[msg.sender].weight;
      if (voteCount < candidates[name].voteCount) {
        voters[msg.sender].voted = true;
      }
    }
    return candidates[name].voteCount;
  }

  function getVoteCountForCandidate(bytes32 name) public constant returns(uint) {
    if (candidates[name].name != name) {
      revert('No candidate found with that name.');
    }
    return candidates[name].voteCount;
  }
}
