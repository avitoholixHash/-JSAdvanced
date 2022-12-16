function gcd(a, b) {

    let gsdArr = [];
    for (let i = Math.min(a, b); i >= 1; i--) {
        if(a % i === 0 && b % i === 0){
           gsdArr.push(i)
        }
    }
    console.log(Math.max(...gsdArr));
}
gcd(15, 5);