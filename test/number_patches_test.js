require('../lib/number_patches.js')

var assert = require('assert')

describe('Number', function() {

  describe('#round(d)', function() {
    it('should round a number to the given amount of digits', function() {
      assert.equal(1.23, 1.2345334.round(2))
      assert.equal(1.24, 1.2355334.round(2))
      assert.equal(434.564, 434.5638234.round(3))
      assert.equal(5, 5.342.round(0))
    })
  })

})
