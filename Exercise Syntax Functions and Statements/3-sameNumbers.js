function sameNumbers(number) {
    let getString = number.toString();

    let sum = 0;
    let flag = true;
    let firstDigit = getString[0]
    for (let i = 0; i < getString.length; i++) {
        if (firstDigit !== getString[i]) {
            flag = false;
        }
        sum += Number(getString[i]);
    }
    console.log(flag);
    console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);