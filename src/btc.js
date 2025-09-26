const crypto = require('crypto');

let hello = 'Hello World';

let i=0;
while (true) {
    let str = hello + i;
    const hash = crypto.createHash('sha256');
    hash.update(str);
    let hashValue = hash.digest('hex');
    if (hashValue.startsWith('0000')) {
        console.log(str);
        console.log(hashValue);
        break;
    }
    i++;
    if (i % 1000000 === 0) {
        console.log(i);
    }
}

// console.log(hash.digest('hex') === hash2.digest('hex'));