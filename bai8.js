const commandLineArgs = process.argv.slice(2);

function nghiem(a, b, denTa, sign = 1) {
    return ((-b + sign * Math.sqrt(denTa)) / 2) * a;
}

function Bai1(a, b, c) {
    let denTa = Math.pow(b, 2) - 4 * a * c;
    let x1 = 0,
        x2 = 0;

    if (denTa === 0) {
        return (x1 = x2 = -b / (2 * a));
    }

    if (denTa < 0) {
        console.log('PT vo nghiem');
        return;
    }

    x1 = nghiem(a, b, denTa, 1);
    x2 = nghiem(a, b, denTa, -1);
    console.log('n bang', Math.floor(x1));
}



function Bai1B() {
    let s = 0,
        n = 0;
    while (s < 10000) {
        n++;
        s += n;
    }

    console.log(n - 1);
}

console.time('Bai1');
Bai1(...commandLineArgs);
console.timeEnd('Bai1');

console.time('Bai1B');
Bai1B(...commandLineArgs);
console.timeEnd('Bai1B');
