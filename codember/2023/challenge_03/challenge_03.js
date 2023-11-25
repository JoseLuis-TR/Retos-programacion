const fs = require('fs').promises;

async function readFile() {
    let data = await fs.readFile('encryption_policies.txt', {encoding: 'utf-8'});

    let passList = data.split("\n");
    checkPass(passList)
}

function checkPass(passList){
    let validPass = [];
    let invalidPass = [];

    passList.forEach(el => {
        let divEl = el.split(/:|-|\s/g)

        let conteo = countCharacters(divEl[4], divEl[2])
        
        if(conteo >= divEl[0] && conteo <= divEl[1]) validPass.push(divEl[4])
        else invalidPass.push(divEl[4])
    });

    console.log(validPass.length)
    console.log(invalidPass[41])
}

function countCharacters(string, chara){
    let contador = 0;

    for(let i = 0; i < string.length; i++){
        if(string[i] === chara) contador++
    }

    return contador;
}

readFile()