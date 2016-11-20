Object.prototype.isArray = function() {
  return this.constructor === Array
}

Object.prototype.getAllFor = function(attrs, acc) {
  acc = acc || []
  var attr = attrs[0]
  if (attrs.length === 1) {
    for (var element of this.getNested(attr)) {
      acc.push(element)
    }
    return acc
  } else {
    for (var item of this.getNested(attr)) {
      item.getAllFor(attrs.slice(1,attrs.length), acc)
    }
  }
  return acc
}

Object.prototype.getNested = function(strungAttrs) {
  var attrs = strungAttrs.split('.')
  if (attrs.length > 1) {
    return this[attrs[0]].getNested(attrs.shifted().join('.'))
  } else {
    return this[attrs[0]]
  }
}
