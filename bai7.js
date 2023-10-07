const commandLineArgs = process.argv.slice(2);

function medium(...args) {
    console.log('medium running ...');

    // @TODO: tinh tong 1 mang
}

function bai7(fullName, pointT, pointL, pointH) {
    const numA = +pointT;
    const numB = +pointL;
    const numC = +pointH;

    const medium = medium();

    if (medium > 10 || medium < 0) {
        console.log('Score invalid.');
        return;
    }

    if (medium >= 9) {
        console.log(`diem trung binh cua ${fullName} la ${medium.toFixed(2)} (xep loai: suat xac)`);
        return;
    }

    if (medium >= 8) {
        console.log(`diem trung binh cua ${fullName} la ${medium.toFixed(2)} (xep loai: gioi)`);
        return;
    }

    if (medium >= 6.5) {
        console.log(`diem trung binh cua ${fullName} la ${medium.toFixed(2)} (xep loai: kha)`);
        return;
    }

    if (medium >= 5) {
        console.log(`diem trung binh cua ${fullName} la ${medium.toFixed(2)} (xep loai: trung binh)`);
    }

    if (medium >= 3) {
        console.log(`diem trung binh cua ${fullName} la ${medium.toFixed(2)} (xep loai: yeu)`);
    }

    console.log(`diem trung binh cua ${fullName} la ${medium.toFixed(2)} (xep loai: kem)`);
}
bai7(...commandLineArgs);
