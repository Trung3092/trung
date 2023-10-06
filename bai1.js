const commandLineArgs = process.argv.slice(2);
function bai1(n) {
  let s = 0;
  const num = +n;

  for (let i = 13; i <= num * 10 + 3; i += 10) {
    s += i;
  }

  console.log(s);
}

function bai1B(n) {
  let s = 0;
  const num = +n;
  let d = 10;
  let u1 = 13;
  let un = u1 + (num - 1) * d;

  s = BigInt((num * (u1 + un)) / 2);
  console.log(s);
}

console.time("bai1");
bai1(...commandLineArgs);
console.timeEnd("bai1");

console.time("bai1B");
bai1B(...commandLineArgs);
console.timeEnd("bai1B");
