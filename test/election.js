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
      let result = await instance.addCandidate.call({from: notOwner});
      assert.equal(result.toString(), owner);
    } catch (e) {
      assert.fail(null, null, `${notOwner} is not owner`)
    }
  });
});
