/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

function dec2bin(dec) {
  // eslint-disable-next-line no-bitwise
  return (dec >>> 0).toString(2);
}

// eslint-disable-next-line no-unused-vars
const hammingDistance = (x, y) => {
  let n1 = dec2bin(x);
  let n2 = dec2bin(y);

  const length = n1.length > n2.length ? n1.length : n2.length;

  n1 = n1.padStart(length, '0');
  n2 = n2.padStart(length, '0');

  let distance = 0;

  const t1 = n1.split('');
  const t2 = n2.split('');

  for (let i = 0; i < length; i += 1) {
    if (t1[i] !== t2[i]) {
      distance += 1;
    }
  }

  return distance;
};
