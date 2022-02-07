/* eslint-disable no-param-reassign */
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
// eslint-disable-next-line no-unused-vars
const diagonalSort = (mat) => {
  const m = mat.length;
  const n = mat[0].length;
  if (m <= 1) return mat;
  if (n <= 1) return mat;
  for (let i = 0; i < m; i += 1) {
    const tArr = [];

    let ti = i;
    for (let j = 0; j < n && ti < m; j += 1, ti += 1) {
      tArr.push(mat[ti][j]);
    }

    let idx = 0;
    ti = i;
    for (let j = 0; j < n && ti < m; j += 1, ti += 1) {
      mat[ti][j] = tArr[idx];
      idx += 1;
    }
  }

  for (let i = 1; i < n; i += 1) {
    let ti = i;
    const tArr = [];
    for (let j = 0; j < m && ti < n; j += 1, ti += 1) {
      tArr.push(mat[j][ti]);
    }
    tArr.sort((a, b) => a - b);

    ti = i;
    let idx = 0;
    for (let j = 0; j < m && ti < n; j += 1, ti += 1) {
      mat[j][ti] = tArr[idx];
      idx += 1;
    }
  }

  return mat;
};
