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
};

function decode(expr) {
    const chunkArray = (arr, cnt) => arr.reduce((prev, cur, i, a) => !(i % cnt) ? prev.concat([a.slice(i, i + cnt)]) : prev, []);
    let res = "";
    let arr = expr.split('');
    let firstArr = chunkArray(arr, 10);
    let result = "";
    let secondArr = firstArr.map(item => {
        for(let i = 0; i < item.length; i++){
            if(item[i] === '0'){
                item[i] = " ";
            } else if (item[i] === "1"){
                break;
            }
        }
        item = chunkArray(item, 2);
        return item;
    });
    secondArr.forEach(element => {
        element.forEach(item => {
           if(item[0] + item[1] === '10'){
            res = res + '.';
           } else if (item[0] + item[1] === '11'){
            res = res + '-';
           }
        })
        res = res + "="
    });
    res = res.split('=');
    res.pop();
    res.forEach(item => {
       for(let key in MORSE_TABLE){
        if (item === key){
          result = result + MORSE_TABLE[key];
        }
       }
       if(item === ""){
        result = result + " ";
       }
    })
    return result;
}

module.exports = {
    decode
}