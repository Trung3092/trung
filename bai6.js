const commandLineArgs = process.argv.slice(2);

function bai6(km) {
    let num = +km;
    let money = 0;

    let cotMoc1 = 1;
    let cotMoc2 = 6;
    let cotMoc3 = 12;
    let sotien1kmdau = 15000;
    let sotientu2den5km = 13500;
    let sotien6kmtrolen = 11000;

    if (num < 0) {
        console.log('nhap so km lon hon 0');
        return;
    }

    if (num <= cotMoc1) {
        money = sotien1kmdau;
        console.log(money);
        return;
    }
    num -= cotMoc1;

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

function bai6B(km) {
    const MILESTONE = {
        LESS_THAN_EQUAL_MIN: 1,
        LESS_THAN_EQUAL_A: 6,
        GREATER_THAN_B: 8,
    };
    const VOUCHER = {
        GREATER_THAN: 130,
        DISCOUNT: 0.15,
    };
    const MONEY = {
        LESS_THAN_EQUAL_MIN: 15_000,
        LESS_THAN_EQUAL_A: 13_500,
        GREATER_THAN_B: 9_000,
    };
    const process = {
        km: +km, // 80
        result: 0,
    };

    if (process.km < 0) throw new Error('Km less than 0');

    if (process.km >= MILESTONE.GREATER_THAN_B) {
        const s = process.km - MILESTONE.GREATER_THAN_B;
        process.result += s * MONEY.GREATER_THAN_B;

        process.km = MILESTONE.GREATER_THAN_B;
    }

    if (process.km <= MILESTONE.LESS_THAN_EQUAL_A) {
        const s = process.km - MILESTONE.LESS_THAN_EQUAL_MIN;
        process.result += s * MONEY.LESS_THAN_EQUAL_A;

        process.km = MILESTONE.LESS_THAN_EQUAL_MIN;
    }

    if (process.km <= MILESTONE.LESS_THAN_EQUAL_MIN) {
        process.result += MILESTONE.LESS_THAN_EQUAL_MIN * MONEY.LESS_THAN_EQUAL_MIN;
    }

    if (km > VOUCHER) {
        process.result *= 1 - VOUCHER.DISCOUNT;
    }

    console.log(process.result);
}

bai6B(...commandLineArgs);
