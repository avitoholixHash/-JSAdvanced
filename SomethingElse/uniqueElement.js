//A unique element in an array
let arr = [5,7,11,13,33,15,1,15,13,1,5,7,11]
let same = [];
let unique = 0;
//sort the array
arr.sort((a, b) => a - b);
for (let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i + 1]){
        same.push(arr[i]);
    }else{
        unique = arr[i];
    }
}

console.log(unique);