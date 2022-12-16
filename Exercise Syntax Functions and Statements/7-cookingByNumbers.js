function cookingByNumbers(...input) {
    let number = Number(input.shift());

    let length = input.length;
    let index = 0;

    while (index < length) {
        let command = input.shift();
        switch (command) {
            case 'chop':
                number /= 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                console.log(number += 1);
                break;
            case 'bake':
                number *= 3;
                console.log(number);
                break;
            case 'fillet':
                number -= (number * 20) / 100;
                console.log(number);
                break;

        }

        index++;
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('-----------------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
