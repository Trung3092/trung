const commandLineArgs = process.argv.slice(2);

function sums(x) {
    let sum = 0;
    while (x > 0) {
        sum += x % 10;
        x = Math.floor(x / 10);
    }
    return sum;
}

function muls(x) {
    let mul = 1;
    while (x > 0) {
        mul *= x % 10;
        x = Math.floor(x / 10);
    }
    return mul;
}

function bai9() {
    for (let i = 10; i <= 99; i++) {
        if (muls(i) === 2*sums(i)) {
            console.log(i);
        }
    }
}

bai9(...commandLineArgs);
