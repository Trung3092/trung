const commandLineArgs = process.argv.slice(2);

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
				console.log('day la tam giac vuong can');
			} else {
				console.log('day la tam giac vuong');
			}
		} else {
			if (numA === numB || numA === numC || numB === numC) {
				console.log('day la tam giac can');
			} else {
				if (numA === numB && numB === numC) {
					console.log('day la tam giac deu');
				}
			}
		}
		console.log('day la tam giac thuong');
	} else {
		console.log('Day khong phia la tam giac');
	}
}

function bai4B(a, b, c) {
	const numA = +a;
	const numB = +b;
	const numC = +c;

	if (numA + numB < numC || numA + numC < numB || numC + numB < numA) {
		console.log('Day khong phia la tam giac');
		return;
	}

	if (numA === numB && (numB === numC) & (numA === numC)) {
		console.log('day la tam giac deu');
		return;
	}

	if (
		numA * numA === numB * numB + numC * numC ||
		numB * numB === numA * numA + numC * numC ||
		numC * numC === numA * numA + numB * numB
	) {
		if (numA === numB || numA === numC || numB === numC) {
			console.log('day la tam giac vuong can');
			return;
		}

		console.log('day la tam giac vuong');
		return;
	}

	if (numA === numB || numA === numC || numB === numC) {
		console.log('day la tam giac can');
	}

	console.log('day la tam giac thuong');
}

bai4B(...commandLineArgs);
