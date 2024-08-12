const crypto = require('crypto');

function getInputString(){
    var x= 1;
    while(true){
        const object = "harkirat => Raman | Rs 100"
        "Ram => Ankit | Rs 10"
        
        const input = object + x.toString();
        const hash = crypto.createHash('sha256').update(input).digest('hex')
        if(hash.startsWith('0000'))
        {
            return {input : input , hash : hash}
        }
        ++x;
    }
}

console.log(getInputString());