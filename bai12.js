const commandLineArgs = process.argv.slice(2);
const { total, primeNumber } = require('./bai11');

//console.log('Tổng hai số  :', total(30, 9));

const checkPrimeNumbers = function (n) {
    for (let i = 1; i < n; i++) {
        if (primeNumber(i)) {
            console.log(i);
        }
    }
};

checkPrimeNumbers(...commandLineArgs);
