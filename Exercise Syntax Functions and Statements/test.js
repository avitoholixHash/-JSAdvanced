//let arr = [1, 2, 3, 3, 4, 5, 88, 99, 66, 88];
let arr = [5,7,11,13,33,15,1,15,13,1,5,7,11]
let ednakwi = [];
let unikat = 0;
arr.sort((a, b) => a - b);
for (let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i + 1]){
        ednakwi.push(arr[i]);
    }else{
        unikat = arr[i];
      
    }
}

console.log(unikat);