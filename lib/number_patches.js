Number.prototype.round = function(d) {
  const string_number = String(this)
  const split_string = string_number.split('.')
  if (split_string.length === 1) return this
  const integer_chunk = split_string[0]
  if (!d) return integer_chunk
  const decimal_chunk = split_string[1]
  const determinig_digit = parseInt(decimal_chunk[d])
  if (determinig_digit < 5) {
    return parseFloat(integer_chunk + '.' + decimal_chunk.slice(0, d))
  } else {
    const last_digit = parseInt(decimal_chunk[d-1]) + 1
    return parseFloat(integer_chunk + '.' + decimal_chunk.slice(0, d - 1) + last_digit)
  }
}
