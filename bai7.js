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

// function bai7(fullName, ...points) {
//     // if (points.length !== 3) return console.log('loi')

//     const nums = points.map(item => +item);

//     nums.forEach(item => {
//         if (item < 0 || item > 10) {
//             throw new Error('Score invalid.');
//         }
//     });

//     const medium = sum(...nums);

//     if (medium >= 9) {
//         console.log(`diem trung binh cua ${fullName} la ${medium.toFixed(2)} (xep loai: suat xac)`);
//         return;
//     }

//     if (medium >= 8) {
//         console.log(`diem trung binh cua ${fullName} la ${medium.toFixed(2)} (xep loai: gioi)`);
//         return;
//     }

//     if (medium >= 6.5) {
//         console.log(`diem trung binh cua ${fullName} la ${medium.toFixed(2)} (xep loai: kha)`);
//         return;
//     }

//     if (medium >= 5) {
//         console.log(`diem trung binh cua ${fullName} la ${medium.toFixed(2)} (xep loai: trung binh)`);
//         return;
//     }

//     if (medium >= 3) {
//         console.log(`diem trung binh cua ${fullName} la ${medium.toFixed(2)} (xep loai: yeu)`);
//         return;
//     }

//     console.log(`diem trung binh cua ${fullName} la ${medium.toFixed(2)} (xep loai: kem)`);
// }

const pointAndRank = [
    {
        medium: 9,
        rank: 'SX',
    },
    {
        medium: 8,
        rank: 'G',
    },
    {
        medium: 6.5,
        rank: 'kha',
    },
    {
        medium: 5,
        rank: 'TB',
    },
    {
        medium: 3.5,
        rank: 'Y',
    },
    {
        medium: 0,
        rank: 'Kem',
    },
];

function bai7(fullName, ...points) {
    const nums = points.map(item => +item);

    nums.forEach(item => {
        if (item < 0 || item > 10) {
            throw new Error('Score invalid.');
        }
    });

    const medium = sum(...nums);

    const result = pointAndRank.find(item => medium >= item.medium);
    console.log(`Diem cua ${fullName} la ${medium.toFixed(2)} (xep loai: ${result.rank})`);
}

// const arr = [{ name: 'huy' }, { name: 'trung' }];
// const findHuy = arr.find(item => item.name === 'huy');
// findHuy.name = 'haha';
// console.log(arr, arr[0], findHuy);
// console.log({} === {});

bai7(...commandLineArgs);
