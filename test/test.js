
/* eslint-disable no-undef */
var expect = require('chai').expect

describe('swasc', function () {
  var twcn = require('../lib/twcn')

  describe('', function () {
    it('twcn.convert(ascII轉為字串)', function () {
      expect(twcn.convert('0100011001010101010011100100001101010100010010010100111101001110轉為function')).to.equal('function轉為0100011001010101010011100100001101010100010010010100111101001110')
    })
  })
  describe('簡體轉繁體測試', function () {
    it('twcn.iconvert(写一个函数将该字串转为简体)', function () {
      expect(twcn.iconvert('function轉為0100011001010101010011100100001101010100010010010100111101001110')).to.equal('0100011001010101010011100100001101010100010010010100111101001110轉為function')
    })
  })

})