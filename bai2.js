const commandLineArgs = process.argv.slice(2);

function bai2(n) {
    let num = +n;
    let s = 0;
    
    for (let i = 12; i <= num * 10 + 2; i += 10) {
        s += i;
    }
    console.log(s);
}

bai2(...commandLineArgs);
