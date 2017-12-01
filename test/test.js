
/* eslint-disable no-undef */
var expect = require('chai').expect

describe('swasc', function () {
  var swasc = require('../lib/swasc')

  describe('字串轉為ascII', function () {
    it('swasc.convert(字串轉為ascII)', function () {
      expect(swasc.convert("f")).to.equal("0110 0110")
    })
  })
  /*describe('字串轉為ascII', function () {
    it('twcn.convert()', function () {
      expect(twcn.iconvert('function轉為0100011001010101010011100100001101010100010010010100111101001110')).to.equal('0100011001010101010011100100001101010100010010010100111101001110轉為function')
    })
  })*/
})