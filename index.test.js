const { flattenRecursive } = require('.');

describe('Flattening an array', () => {

  describe('given an array with nested arrays in it', () => {
    it('should return a plain array without any more elements on it', () => {
      const array = [ 1, [ 2, [ 3 ] ], 4 ];

      const result = flattenRecursive(array);
      const expectedResult = [1, 2, 3, 4];

      expect(result).toEqual(expectedResult);
    });
  })

});
