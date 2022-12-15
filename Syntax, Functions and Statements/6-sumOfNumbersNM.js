function sumOfNumbersNM(startNumber, endNumber){
    let numStart = Number(startNumber);
    let numEnd = Number(endNumber);
    let sum = 0;
    for(let i = numStart; i <= numEnd;i++){
        sum += i;
    }
    console.log(sum);
}

sumOfNumbersNM('1', '5');