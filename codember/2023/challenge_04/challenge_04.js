const fs = require('fs').promises;
const validList = [];

async function readFile() {
    let data = await fs.readFile('files_quarantine.txt', {encoding: 'utf-8'});

    let nameList = data.split("\n");

    nameList.forEach(el => {
        let dividedName = el.split('-')
        let ourCheckSum = checkChecksum(dividedName);
        if(ourCheckSum === dividedName[1]){
            validList.push(ourCheckSum)
        }
    })
    
    console.log(validList[32])
}

function checkChecksum(dividedName){
    let originalName = dividedName[0];

    let countCharacters = {};
    let orderOfCharacters = [];

    let finalString = '';

    for (var i = 0; i < originalName.length; i++) {
        if(!countCharacters.hasOwnProperty(originalName[i])){
            countCharacters[originalName[i]] = 1
            orderOfCharacters.push(originalName[i])
        } else {
            countCharacters[originalName[i]]++
        }
    }

    orderOfCharacters.forEach(el => {
        if(countCharacters[el] === 1){
            finalString += el
        }
    })

    return finalString;
}

readFile()
