/* global describe, it */

var terminal = require('..')
var expect = require('chai').expect

describe('setCursor', function () {
  var cols = 1
  var rows = 1

  describe('setCursor()', function () {
    it('should throw an Error', function () {
      expect(function () { terminal.setCursor() }).to.throw(Error)
    })
  })

  describe('setCursor(cols)', function () {
    it('should throw an Error', function () {
      expect(function () { terminal.setCursor(cols) }).to.throw(Error)
    })
  })

  describe('setCursor(-cols, -rows)', function () {
    it('should throw a TypeError', function () {
      expect(function () { terminal.setCursor(-cols, -rows) }).to.throw(TypeError)
    })
  })

  describe('setCursor(NaN, NaN)', function () {
    it('should throw a TypeError', function () {
      expect(function () { terminal.setCursor(NaN, NaN) }).to.throw(TypeError)
    })
  })
})
