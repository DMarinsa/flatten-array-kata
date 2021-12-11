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

function flattenWithReduce(arr) {
  return arr.reduce((accumulated, currentElement) => accumulated.concat(Array.isArray(currentElement) ? flattenWithReduce(currentElement) : currentElement), []);
};

module.exports = {
  flattenRecursive,
  flattenWithReduce
}
