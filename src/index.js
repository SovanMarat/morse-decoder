const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    " ": " "
};

function decode(expr) {
    let str=expr;
    let strTemp = '';
    let arrTemp = [];
    let arrNew = [];
    let arrN = [];
    for (let i = 0; i < str.length; i++) {
        if ((i + 1) % 10 === 0) {
            strTemp = `${strTemp}${str[i]},`
        } else {
            strTemp = `${strTemp}${str[i]}`
        }
        arrTemp = strTemp.split(',');
        arrTemp.length = arrTemp.length - 1;
        arrNew = arrTemp.map(item => {
            item = String(item);
            if (item === '**********') {
                item = 99;
                return item;
            }
            item = Number(item);
            return item;
        });
    }
    arrN = arrNew.map(item => {
        let itemT = '';
        item = String(item);
        for (let i = 0; i < item.length; i += 2) {
            let itemTemp = '';
            itemTT = (item[i]) + (item[i + 1]);
            if ((item[i]) + (item[i + 1]) === '10') {
                itemTemp = `${itemTemp}.`;
            }
            if (item[i] + item[i + 1] === '11') {
                itemTemp = `${itemTemp}-`;
            }
            if (item[i] === '9') {
                itemTemp = `${itemTemp} `;
            }
            itemT = `${itemT}${itemTemp}`;
        }
        return itemT;
    });
let result = [];
result = arrN.map(item => {
 item=MORSE_TABLE[item];
        return item;
    });
    result=result.join('');
    console.log(result);
    return result;
}

module.exports = {
    decode
}