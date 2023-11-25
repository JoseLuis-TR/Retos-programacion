const fs = require('fs');

async function readFile() {
    let data = await fs.readFile('data.txt', {encoding: 'utf-8'});
    
    let dataArray = data.toString().split(' ')
    let dataCount = {};

    dataArray.map((animal) => {
        console.log(animal)
    })

    for(let i = 0; i < dataArray.length; i++){
        if(dataCount[dataArray[i].toLowerCase()] === undefined){
            dataCount[dataArray[i].toLowerCase()] = 1
        } else {
            dataCount[dataArray[i].toLowerCase()] += 1
        }
    }

    let resultString = '';
    for(const key in dataCount){
        resultString += `${key}${dataCount[key]}`
    }
    console.log(resultString)
}

readFile()