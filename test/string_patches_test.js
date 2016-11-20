require('../lib/string_patches.js')

var assert = require('assert')


describe('String', function() {

  describe('#reverse()', function() {
    it('should return the reverse of the string', function() {
      assert.equal('gnirts a si siht', 'this is a string'.reverse())
      assert.equal('', ''.reverse())
    })
  })

})
