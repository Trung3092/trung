const commandLineArgs = process.argv.slice(2);

function bai5(n) {
    let num = +n;
    let s = 0;
    let a = 1;

    for (let i = 1; i <= num; i++) {
        a *= i;
        s += i;
    }
    console.log(s);
}

bai5(...commandLineArgs);
