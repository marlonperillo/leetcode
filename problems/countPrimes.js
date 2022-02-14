let done = false;
const primes = [];

const init = () => {
  if (done) { return; }
  const maxPrime = 5000001;
  primes[0] = false;
  primes[1] = false;
  primes[2] = true;
  for (let i = 2; i <= maxPrime; i += 1) {
    primes[i] = true;
  }
  for (let i = 2; i <= maxPrime; i += 1) {
    if (primes[i]) {
      const counter = i;
      for (let j = i + counter; j <= maxPrime; j += counter) {
        primes[j] = false;
      }
    }
  }
  done = true;
};

// eslint-disable-next-line no-unused-vars
const countPrimes = (n) => {
  init();
  let count = 0;
  for (let i = 1; i < n; i += 1) {
    if (primes[i]) { count += 1; }
  }

  return count;
};
