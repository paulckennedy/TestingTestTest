const { sum, prod } = require('./sketch');

test('adds 1 + 2 to equal 3', sumTest);

function sumTest() {
  expect(sum(1,2)).toBe(3);
};

test('adds 1 * 2 to equal 2', prodTest);

function prodTest() {
  expect(prod(1,2)).toBe(2);
};
