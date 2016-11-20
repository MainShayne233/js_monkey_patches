require('../lib/object_patches.js')

var assert = require('assert')

// monkey patching for the monkey patching tests
assert.arraysEqual = function(array1, array2) {
  return assert.equal(true, array1.equals(array2))
}

describe('Object', function() {

  describe('#isArray()', function() {
    it('returns true if is array, false otherwise', function() {
      assert.equal(true, [1,2,3].isArray())
      assert.equal(true, [].isArray())
      assert.equal(false, {hi: 'there'}.isArray())
      assert.equal(false, {}.isArray())
    })
  })

  describe('#getAllFor(args)', function() {
    it('returns array of all nested values', function() {
      var order = {
        fulfillments: [
          {lineItems: [1,2,3]},
          {lineItems: [4,5,6]},
        ]
      }
      assert.arraysEqual([1,2,3,4,5,6], order.getAllFor(['fulfillments','lineItems']))
      var order = {
        fulfillments: {
          manufacturing: [
            {lineItems: [1,2,3]},
            {lineItems: [4,5,6]},
          ]
        }
      }
      assert.arraysEqual([1,2,3,4,5,6], order.getAllFor(['fulfillments.manufacturing','lineItems']))
    })
  })

  describe('#getNested(strungAttrs', function() {
    it('should return the nested attributes given', function() {
      var person = {name: 'john', brother: {name: 'joe', father: {name: 'george'}}}
      assert.equal('john', person.getNested('name'))
      assert.equal('joe', person.getNested('brother.name'))
      assert.equal('george', person.getNested('brother.father.name'))
    })
  })

})
