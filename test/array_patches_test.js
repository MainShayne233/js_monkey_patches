require('../lib/array_patches.js')

var assert = require('assert')

// monkey patching for the monkey patching tests
assert.arraysEqual = function(array1, array2) {
  return assert.equal(true, array1.equals(array2))
}

describe('Array', function() {

  describe('#equals(otherArray)', function() {
    it('should return true if arrays or equal, false otherwise', function() {
      assert.equal(true, [1,2,3,4].equals([1,2,3,4]))
      assert.equal(false, [1,2,3,4].equals([1,2,3]))
    })
  })

  describe('#mapAndFilter(mapFunc, filterFunc)', function() {
    it('should return a mapped and filtered array', function() {
      var onlyIntegers = function(x) { return x === Math.round(x) }
      var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,17,19,20]
      assert.arraysEqual([1,2,3,4], input.mapAndFilter(Math.sqrt, onlyIntegers))
    })
  })

  describe('#min()', function() {
    it('should return the smallest value of the array', function() {
      assert.equal(101, [432,6789,765,101,263,46567].min())
    })
  })

  describe('#minBy(mapFunction)', function() {
    it('should return the smallest return value of the function', function() {
      var flipNumber = function(x) {
        return parseFloat(String(x).reverse())
      }
      assert.equal(12342.32, [2.343,12342.32,123,23.4321,345].minBy(flipNumber))
    })
  })

  describe('#max()', function() {
    it('should return the largest value of the array', function() {
      assert.equal(46567, [432,6789,765,101,263,46567].max())
    })
  })

  describe('#maxBy(mapFunction)', function() {
    it('should return the largest return value of the function', function() {
      var flipNumber = function(x) {
        return parseFloat(String(x).reverse())
      }
      assert.equal(23.4321, [2.343,12342.32,123,23.4321,345].maxBy(flipNumber))
    })
  })

  describe('#pluck(attr)', function () {
    it('should return just the specified attr of each element', function () {
      var names = [
        {firstName: 'joe', lastName: 'garry'},
        {firstName: 'john', lastName: 'go'},
        {firstName: 'josh', lastName: 'wade'}
      ]
      assert.arraysEqual(['joe','john','josh'], names.pluck('firstName'))
    })
  })

  describe('#shifted', function () {
    it('should return the array without the first element', function () {
      var names = ['joe','john','josh', 'george']
      assert.arraysEqual(['john','josh', 'george'], names.shifted())
      assert.arraysEqual(['joe','john','josh', 'george'], names)
    })
  })

  describe('#popped', function () {
    it('should return the array without the last element', function () {
      var names = ['joe','john','josh', 'george']
      assert.arraysEqual(['joe', 'john','josh'], names.popped())
      assert.arraysEqual(['joe','john','josh', 'george'], names)
    })
  })

  describe('#flatten', function () {
    it('should return the flattened array', function() {
      var scores = [[3,34,34,[34,[[[[3]]],4,5,[2]]],4,33,[43]]]
      assert.arraysEqual([3, 34, 34, 34, 3, 4, 5, 2, 4, 33, 43], scores.flatten())
    })
  })

  describe('#compact', function () {
    it('should return an array of only definded values', function() {
      var marks = [89, null, 95, 82, 0, NaN, 75, undefined]
      assert.arraysEqual([89,95,82,0,75], marks.compact())
    })
  })

  describe('#include', function () {
    it('should return true if the array contains the element, false otherwise', function() {
      var marks = [54,64,70.0,54,23,76,43]
      console.log(marks.include(70))
      assert.equal(true, marks.include(76))
      assert.equal(false, marks.include(71))
    })
  })

})
