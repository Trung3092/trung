const commandLineArgs = process.argv.slice(2);

function bai6(km) {
    let num = +km;
    let money = 0;
    let sotien1kmdau = 15000;
    let sotientu2den5km = 13500;
    let sotien6kmtrolen = 11000;

    if (num < 0) {
        console.log('nhap so km lon hon 0');
        return;
    }

    if (num <= 1) {
        money = sotien1kmdau;
        console.log(money);
        return;
    }

    if (num < 6) {
        money = 1 * sotien1kmdau + 4 * sotientu2den5km + (num - 5) * sotientu2den5km;
        console.log(money);
        return;
    }

    if (num <= 120) {
        money = 1 * sotien1kmdau + 4 * sotientu2den5km + (num - 5) * sotien6kmtrolen;
        console.log(money);
        return;
    }

    money = ((1 * sotien1kmdau + 4 * sotientu2den5km + (num - 5) * sotien6kmtrolen) * 10) / 100;
    console.log(money);
}

bai6(...commandLineArgs);
