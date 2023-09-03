//Given an integer n, return the number of prime numbers that are strictly less than n.

//Examples

//Input: n = 10
//Output: 4
//Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

//Input: n = 0
//Output: 0

//Input: n = 1
//Output: 0

//Constraints:
//0 <= n <= 5 * 106

//Solution

var countPrimes = function(n) {
    if (n <= 2) {
        return 0;
    }

    // Create an array to track whether numbers are prime or not.
    const isPrime = new Array(n).fill(true);

    // 0 and 1 are not prime.
    isPrime[0] = false;
    isPrime[1] = false;

    // Start with the first prime number, 2.
    let count = 0;
    for (let p = 2; p * p < n; p++) {
        if (isPrime[p]) {
            // Mark all multiples of the prime number as not prime.
            for (let i = p * p; i < n; i += p) {
                isPrime[i] = false;
            }
        }
    }

    // Count the number of prime numbers.
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }

    return count;
}

