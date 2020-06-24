const Crypto = require('crypto-js');

console.log(Crypto.SHA256(11));
console.log(Crypto.SHA256(11).toString());

console.log(Crypto.SHA256({}).toString());
console.log(Crypto.SHA256([]).toString());
console.log(Crypto.SHA256("single string").toString());

const fs = require("fs");
console.log(Crypto.SHA256(fs.readFileSync('./README.md')).toString());