const commandLineArgs = process.argv.slice(2);

function bai4(n) {
    let num = +n;
    let s = 0;

    for (let i = 1; i <= num; i++) {
        s += 1 / (i * (i + 1));
    }

    console.log(s);
}

bai4(...commandLineArgs);
