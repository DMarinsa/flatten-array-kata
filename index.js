function flattenRecursive(input) {
  let result = []
  if(!Array.isArray(input)) {
      return input;
  }
  for(let data of input) {
      result = result.concat(flattenRecursive(data))
  }
  return result
}

module.exports = {
  flattenRecursive,
}
