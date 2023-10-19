const commandLineArgs = process.argv.slice(2);

const primeNumber = function (n) {
    const num = +n;

    if (num < 2) {
        console.log(`${num} không phải là số nguyên tố`);
        return;
    }

    for (let i = 2; i < num - 1; i++) {
        if (num % i === 0) {
            console.log(`${num} không phải là số nguyên tố`);
            break;
        } else {
            console.log(`${num} là số nguyên tố`);
            break;
        }
    }
};

primeNumber(...commandLineArgs);

const total = (a, b) => a + b;

module.exports = { total, primeNumber };
