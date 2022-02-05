/**
 * @param {string[]} transactions
 * @return {string[]}
 */
// eslint-disable-next-line no-unused-vars
const invalidTransactions = (transactions) => {
  const returnArray = [];
  const userArray = [];
  const index = [];

  const addedFlag = [];

  // transactions.forEach(transaction => {
  for (let i = 0; i < transactions.length; i += 1) {
    const transaction = transactions[i];
    if (transaction.split(',')[2] > 1000) {
      returnArray.push(transaction);
      addedFlag[i] = true;
    }
  }

  for (let i = 0; i < transactions.length; i += 1) {
    const transaction = transactions[i];
    const t = transaction.split(',');

    if (userArray[t[0]] === undefined) {
      index.push(t[0]);
      userArray[t[0]] = [];
      userArray[t[0]].push([t[1], t[3], t[2], i]);
    } else {
      userArray[t[0]].push([t[1], t[3], t[2], i]);
    }
  }

  index.forEach((k) => {
    userArray[k].sort((a, b) => a[0] - b[0]);
  });

  index.forEach((k) => {
    for (let i = 0; i < userArray[k].length - 1; i += 1) {
      for (let j = i + 1; j < userArray[k].length; j += 1) {
        if (userArray[k][j][0] - userArray[k][i][0] <= 60
              && userArray[k][j][1] !== userArray[k][i][1]) {
          if (!addedFlag[userArray[k][j][3]]) {
            addedFlag[userArray[k][j][3]] = true;
            returnArray.push(`${k},${userArray[k][j][0]},${userArray[k][j][2]},${userArray[k][j][1]}`);
          }
          if (!addedFlag[userArray[k][i][3]]) {
            addedFlag[userArray[k][i][3]] = true;
            returnArray.push(`${k},${userArray[k][i][0]},${userArray[k][i][2]},${userArray[k][i][1]}`);
          }
        }
      }
    }
  });

  return returnArray;
};
