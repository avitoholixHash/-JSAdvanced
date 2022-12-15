function mathOperations(...mathOperations) {
    let getArr = mathOperations.slice();
    let command = getArr[2];
    let result = 0;

    switch (command) {
        case '+':
        result = getArr[0] + getArr[1];
            break;
        case '-':
            result = getArr[0] - getArr[1];
            break;
        case '*':
            result = getArr[0] * getArr[1];
            break;
        case '/':
            result = getArr[0] / getArr[1];
            break;
        case '%':
            result = getArr[0] % getArr[1];
            break;
        case '**':
            result = getArr[0] ** getArr[1];
            break;
    }

    return console.log(result);
}
mathOperations(5, 6, '+')