function smallestTwoNumbers(arr){
    return arr.sort((a,b) => a-b).slice(0,2).join(' ');

}
let result = smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
console.log(result);


