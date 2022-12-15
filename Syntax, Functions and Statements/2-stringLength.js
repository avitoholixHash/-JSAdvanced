function stringLength(...string){
    //Get input from string to array!
    let getSlice = string.slice();
    let sum = 0;
    let length = getSlice.length;

    for (const index of getSlice) {
        sum += index.length;
    }
    let avarage = sum / length;
     console.log(sum);
     console.log(Math.floor(avarage));
}
stringLength('chocolate', 'ice cream', 'cake')