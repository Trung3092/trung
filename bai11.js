const commandLineArgs = process.argv.slice(2);

function primeNumber(n) {
    const num = +n;

    if (num < 2) {
        console.log('n không phải là số nguyên tố');
        return;
    }

    for (let i = 2; i < num - 1; i++) {
        if (num % i === 0) {
            console.log('n không phải là số nguyên tố');
            break;
        } else {
            console.log('n là số nguyên tố');
            break;
        }
    }
}

primeNumber(...commandLineArgs);
