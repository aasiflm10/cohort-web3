const crypto = require('crypto');

function getInputString(){
    var x= 1;
    while(true){
        const input = x.toString();
        const hash = crypto.createHash('sha256').update(input).digest('hex')
        if(hash.startsWith('0000'))
        {
            return {input : input , hash : hash}
        }
        ++x;
    }
}

console.log(getInputString());