function wordsUppercase(text){
    console.log(text.match(/\w+/gm).join(', ').toUpperCase());
}
wordsUppercase('Hi, how are you?');