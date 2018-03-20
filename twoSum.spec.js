const {expect} = require('chai');
const twoSum = require('./twoSum');

describe.only('twoSum', () => {
  it('twoSum is a function', () => {
    expect(twoSum).to.be.a('function');
  });

  it('Returns an array of the indeces of the two numbers that equal the second argument', () => {
    expect(twoSum([1, 2], 3)).to.equal([0, 1]);
  })
});
