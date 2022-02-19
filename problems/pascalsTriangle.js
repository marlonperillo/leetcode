/**
 * @param {number} numRows
 * @return {number[][]}
 */
// eslint-disable-next-line no-unused-vars
const generate = (numRows) => {
  if (numRows === 1) {
    return [[1]];
  }
  const pascal = [];
  pascal[0] = [1];
  pascal[1] = [1, 1];

  for (let i = 1; i < numRows - 1; i += 1) {
    // console.log(pascal[i])
    pascal[i + 1] = [];
    pascal[i + 1][0] = 1;
    pascal[i + 1][pascal[i].length] = 1;
    for (let k = 0; k < pascal[i].length - 1; k += 1) {
      pascal[i + 1][k + 1] = pascal[i][k] + pascal[i][k + 1];
    }
  }

  return pascal;
};
