function squareOfStars(input) {
   
    let star = ''
    for (let i = 0; i < input; i++) {
        for (let j = 0; j < input; j++){
            star += '*';
            
        }
        // newline after each row!
        star+='\n';
    }
    console.log(star);
}
squareOfStars(5)