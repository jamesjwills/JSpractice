function calculateTaxiFare(seconds) {
    if (seconds <= 180) {
        return 500;
    } else {
        return 500 + (Math.ceil(seconds/60)-3)*70;
    }
    }
    console.log(calculateTaxiFare(150));
// should return 500

console.log(calculateTaxiFare(360));
// should return 710

console.log(calculateTaxiFare(491));
// should return 920