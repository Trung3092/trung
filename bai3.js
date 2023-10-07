const commandLineArgs = process.argv.slice(2);

function bai3(n) {
    let num = +n;
    let s = 0;

    for (let i = 1; i <= num; i++) {
        s += 1 / i;
    }
    console.log(s);
}

bai3(...commandLineArgs);
