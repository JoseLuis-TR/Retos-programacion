const decode = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'

let decodeList = decode.split('');
console.log(decodeList)

let decodedNumber = 0;
let finalNumber = '';

decodeList.map((letter) => {
    switch(letter){
        case '#':
            decodedNumber++;
            break;
        case '@':
            decodedNumber--;
            break;
        case '*':
            decodedNumber = decodedNumber * decodedNumber
            break;
        case '&':
            finalNumber += decodedNumber
    }
})

console.log(finalNumber)