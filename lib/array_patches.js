Array.prototype.mapAndFilter = function(mapFunction, filterFunction) {
  return this.map(mapFunction)
             .filter(filterFunction)
}

Array.prototype.equals = function(otherArray) {
  if (this.length === otherArray.length) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] !== otherArray[i]) {
        return false
      }
    }
    return true
  } else {
    return false
  }
}

Array.prototype.min = function() {
  return Math.min.apply(null, this)
}

Array.prototype.minBy = function(mapFunction) {
  var smallestIndex = 0
  var mappedArray = this.map(mapFunction)
  for (var i = 1; i < this.length; i++) {
    if (mappedArray[i] < mappedArray[smallestIndex]) {
      smallestIndex = i
    }
  }
  return this[smallestIndex]
}

Array.prototype.max = function() {
  return Math.max.apply(null, this)
}

Array.prototype.maxBy = function(mapFunction) {
  var largestIndex = 0
  var mappedArray = this.map(mapFunction)
  for (var i = 1; i < this.length; i++) {
    if (mappedArray[i] > mappedArray[largestIndex]) {
      largestIndex = i
    }
  }
  return this[largestIndex]
}

Array.prototype.pluck = function(attr) {
  return this.map(function(object) {
    return object[attr]
  })
}

Array.prototype.shifted = function() {
  return this.slice(1, this.length)
}

Array.prototype.popped = function() {
  return this.slice(0, this.length-1)
}

Array.prototype.flatten = function(acc) {
  acc = acc || []
  for (var element of this) {
    if (element.isArray()) {
      element.flatten(acc)
    } else {
      acc.push(element)
    }
  }
  return acc
}


Array.prototype.compact = function() {
  return this.filter(function(element) {
    return element !== null      &&
           element !== undefined &&
           !isNaN(element)
  })
}

Array.prototype.include = function(soughtElement) {
  return !!this.find(function(element) {
    return element === soughtElement
  })
}
