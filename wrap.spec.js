const {expect} = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
    it('wrap is a function', () => {
        expect(wrap).to.be.a('function');
      });

    it('Returns empty string if empty string was provided', () => {
        expect(wrap("", 10)).to.equal("");
      });

    xit('Only accepts a number as second argument', () => {
        expect(wrap("", "hello")).to.throw(Error());
    });

    xit('Only accepts a string as first argument', () => {
        expect(wrap(['1', '2'], 10)).to.throw('Only accepts a string as first argument');
    });
    
    xit('Returns wrapped string at proper column', () => {
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal(`Lorem ipsum dolor
        sit eu amet, elit na
        magna sem amet nulla
        vel purus ac ligula.`);
    });

    xit('New line goes before word if column number falls in the center of a word', () => {
        expect(wrap("hello my name is thefoxal", 10)).to.equal(`hello my 
        name is 
        thefoxal`);
      });
})