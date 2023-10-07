const commandLineArgs = process.argv.slice(2);

function bai6(x, n) {
    let numX = +x;
    let numN = +n;
    let s = 1;

    for (let i = 1; i <= numN; i++) {
        s += i * numX;
    }
    console.log(s);
}

bai6(...commandLineArgs);
