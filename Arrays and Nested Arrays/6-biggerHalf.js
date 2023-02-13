function biggerHalf(arr) {
    arr.sort((a, b) => a - b);
    let halfArr = arr.slice(arr.length / 2,)
    return halfArr;
}
let result = biggerHalf([3, 19, 14, 7, 2, 19, 6]);
console.log(result);
