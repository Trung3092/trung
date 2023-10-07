const commandLineArgs = process.argv.slice(2);

function sum(...args) {
    // console.log('medium running ...');

    // @TODO: tinh tong 1 mang

    let s = 0;
    for (const item of args) {
        s += item;
    }
    return s / args.length;
}

function message({ rank, fullName, medium }) {
    return `Diem cua ${fullName} la ${medium.toFixed(2)} (rank: ${rank})`;
}

const configs = [
    {
        mileStone: 9,
        rank: 'XS',
    },
    {
        mileStone: 8,
        rank: 'G',
    },
    {
        mileStone: 6.5,
        rank: 'Kha',
    },
    {
        mileStone: 5,
        rank: 'TB',
    },
    {
        mileStone: 3.5,
        rank: 'Y',
    },
    {
        mileStone: 0,
        rank: 'Kem',
    },
];

function bai7(fullName, ...points) {
    // if (points.length !== 3) return console.log('loi')
    const numbers = points.map(item => +item);

    numbers.forEach(item => {
        if (item < 0 || item > 10) {
            throw new Error('Score invalid.');
        }
    });

    const medium = sum(...numbers);

    const data = configs.find((item, index) => medium > item.mileStone);

    console.log(message({ rank: data.rank, fullName, medium }));
}

bai7(...commandLineArgs);
