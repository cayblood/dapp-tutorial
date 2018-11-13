# dapp-tutorial

Election dapp tutorial

## installation

0. enter desired npm environment using nvm (if desired)
1. `npm install -g yarn`
1. `yarn global add truffle`
1. install [ganache](https://truffleframework.com/ganache)
1. `yarn`
1. `yarn migrate` to generate the contract address
1. Add the contract address to `/interface/src/contract-address.js`

## testing

0. Run ganache
1. `yarn test`

## running the dapp

0. Run ganache
1. `yarn start`
