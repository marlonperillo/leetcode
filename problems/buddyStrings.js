/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
// eslint-disable-next-line no-unused-vars
const buddyStrings = (s, goal) => {
  const len = s.length;
  const len2 = goal.length;

  if (len !== len2) return false;

  const t1 = s.split('');
  const t2 = goal.split('');
  let diffCount = 0;
  for (let i = 0; i < len; i += 1) {
    if (t1[i] !== t2[i]) {
      diffCount += 1;
    }
  }

  if (diffCount === 2) {
    const diffList1 = [];
    const diffList2 = [];

    for (let i = 0; i < len; i += 1) {
      if (t1[i] !== t2[i]) {
        diffList1.push(t1[i]);
        diffList2.push(t2[i]);
      }
    }
    diffList1.sort();
    diffList2.sort();

    return diffList1[0] === diffList2[0] && diffList1[1] === diffList2[1];
  }

  if (diffCount === 0) {
    const charCount = [];
    const chars = [];
    for (let i = 0; i < len; i += 1) {
      if (!chars.includes(t1[i])) {
        chars.push(t1[i]);
        charCount[t1[i]] = 1;
      } else {
        charCount[t1[i]] += 1;
      }
    }

    let doubleCharFlag = false;

    chars.forEach((c) => {
      if (charCount[c] >= 2) {
        doubleCharFlag = true;
      }
    });

    return doubleCharFlag;
  }
  return false;
};
