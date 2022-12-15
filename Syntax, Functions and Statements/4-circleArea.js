function circleArea(number) {
    let result = Math.pow(number, 2) * Math.PI;
    if (typeof (number) === 'number') {
        return console.log(result.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(number)}.`);
    }
}
circleArea(5)