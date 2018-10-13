const Election = artifacts.require('Election');

contract('Election tests', (accounts) => {
  let instance;
  let owner = accounts[0];
  let notOwner = accounts[1];

  beforeEach(async () => {
    instance = await Election.deployed();
  });

  it('should not allow anyone but the contract owner to add a candidate', async () => {
    try {
      let result = await instance.addCandidate('George', {from: notOwner});
    } catch (e) {
      assert.equal(e.message, 'VM Exception while processing transaction: revert');
    }
  });

  it('should allow the contract owner to add a candidate', async () => {
    let result = await instance.addCandidate('George');
  });
});
