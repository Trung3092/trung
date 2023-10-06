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
    console.log("PT vo nghiem");
    return;
  }

  x1 = nghiem(a, b, denTa, 1);
  x2 = nghiem(a, b, denTa, -1);
  console.log("Pt co 2 ngiem phan lan luot la", x1, x2);
}

const maxNumber = (...args) => {
  if (args.length === 0) return null;

  let max = args[0];

  for (let i = 1; i < args.length; i++) {
    if (args[i] > max) max = args[i];
  }

  return max;
};

const minNumber = (...args) => {
  if (args.length === 0) return null;

  let min = args[0];

  for (let i = 1; i < args.length; i++) {
    if (args[i] < min) min = args[i];
  }

  return min;
};

function Bai2(a, b, c) {
  if (a > b && a > c) {
    if (b > c) {
      console.log(c + "," + b + "," + a);
    } else {
      console.log(b + "," + c + "," + a);
    }
  } else if (b > a && b > c) {
    if (a > c) {
      console.log(c + "," + a + "," + b);
    } else {
      console.log(a + "," + c + "," + b);
    }
  } else if (c > a && c > b) {
    if (a > b) {
      console.log(b + "," + a + "," + c);
    } else {
      console.log(a + "," + b + "," + c);
    }
  }
}

function Bai2B(a, b, c) {
  const numA = +a;
  const numB = +b;
  const numC = +c;

  const max = maxNumber(numA, numB, numC);
  const min = minNumber(numA, numB, numC);
  const between = numA + numB + numC - max - min;
  console.log(min + ", " + between + ", " + max);
}

function bai3(...args) {
  const numbers = args.map((item) => +item);
  const max = maxNumber(...numbers);
  const min = minNumber(...numbers);

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === min || numbers[i] === max) {
      numbers.splice(i, 1);
      i--;
    }
  }

  console.log(numbers);
}

function bai4(a, b, c) {
  const numA = +a;
  const numB = +b;
  const numC = +c;

  if (numA + numB > numC && numA + numC > numB && numB + numC > numA) {
    if (
      numA * numA === numB * numB + numC * numC ||
      numB * numB === numA * numA + numC * numC ||
      numC * numC === numA * numA + numB * numB
    ) {
      if (numA === numB || numA === numC || numB === numC) {
        console.log("day la tam giac vuong can");
      } else {
        console.log("day la tam giac vuong");
      }
    } else {
      if (numA === numB || numA === numC || numB === numC) {
        console.log("day la tam giac can");
      } else {
        if (numA === numB && numB === numC) {
          console.log("day la tam giac deu");
        }
      }
    }
    console.log("day la tam giac thuong");
  } else {
    console.log("Day khong phia la tam giac");
  }
}

function bai5(strings) {
  //   var updateString = "";

  //   for (var i = 0; i < strings.length; i++) {
  //     var x = "";
  //     if (strings[i].toUpperCase()) {
  //       x = strings[i].toLowerCase();
  //       updateString += x;
  //     }
  //     if (strings[i].toLowerCase()) {
  //       x = strings[i].toUpperCase();
  //       updateString += x;
  //     }
  //   }

  //   console.log(updateString);

  var updateStrings = strings.replace(
    /([a-z]+)|([A-Z]+)/g,
    //  /.../g tim cac tu trong string
    function (match, chr) {
      return chr ? match.toUpperCase() : match.toLowerCase();
    }
  );
  console.log(updateStrings);
}

function bai6(km) {
  var money = 0;
  var sotien1kmdau = 15000;
  var sotientu2den5km = 13500;
  var sotien6kmtrolen = 11000;

  while (km <= 0) {
    console.log("nhap lai so km phai lon hon 0");
    km > 1;
  }

  if (km <= 2) {
    money = sotien1kmdau;
  } else if (km <= 5 && km > 2) {
    money = 1 * sotien1kmdau + (km - 2) * sotientu2den5km;
  } else if (km >= 6) {
    money = 1 * sotien1kmdau + 5 * sotientu2den5km + (km - 6) * sotien6kmtrolen;
  } else if (km > 120) {
    money =
      ((1 * sotien1kmdau + 5 * sotientu2den5km + (km - 6) * sotien6kmtrolen) *
        10) /
      100;
  }
  console.log(money);
}

function bai7(fullName, pointT, pointL, pointH) {
  const numA = +pointT;
  const numB = +pointL;
  const numC = +pointH;

  function medium(result) {
    return (result = (numA + numB + numC) / 3);
  }

  if (medium() >= 9 && medium() < 10) {
    console.log(
      `diem trung binh cua ${fullName} la ${medium().toFixed(
        2
      )} (xep loai: suat xac)`
    );
  } else if (medium() >= 8 && medium() < 9) {
    console.log(
      `diem trung binh cua ${fullName} la ${medium().toFixed(
        2
      )} (xep loai: gioi)`
    );
  } else if (medium() >= 6.5 && medium() < 8) {
    console.log(
      `diem trung binh cua ${fullName} la ${medium().toFixed(
        2
      )} (xep loai: kha)`
    );
  } else if (medium() >= 5 && medium() < 6.5) {
    console.log(
      `diem trung binh cua ${fullName} la ${medium().toFixed(
        2
      )} (xep loai: trung binh)`
    );
  } else if (medium() >= 3 && medium() < 5) {
    console.log(
      `diem trung binh cua ${fullName} la ${medium().toFixed(
        2
      )} (xep loai: yeu)`
    );
  } else if (medium() >= 0 && medium() < 3.5) {
    console.log(
      `diem trung binh cua ${fullName} la ${medium().toFixed(
        2
      )} (xep loai: kem)`
    );
  }
}
bai7(...commandLineArgs);
