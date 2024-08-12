const crypto = require('crypto');

function getInputString(){
    var x= 1;
    while(true){
        const input = "100xdevs" + x.toString();
        //since input string should start with 100xdevs


        const hash = crypto.createHash('sha256').update(input).digest('hex')
        if(hash.startsWith('0000'))
        {
            return {input : input , hash : hash}
        }
        ++x;
    }
}

console.log(getInputString());