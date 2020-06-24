const Crypto = require('crypto-js');

console.log(Crypto.SHA256(11));
console.log(Crypto.SHA256(11).toString());

console.log(Crypto.SHA256({}).toString());
console.log(Crypto.SHA256([]).toString());
console.log(Crypto.SHA256("single string").toString());

const fs = require("fs");
console.log(Crypto.SHA256(fs.readFileSync('./README.md')).toString());

console.log(Crypto.MD5(124124).toString());
console.log(Crypto.SHA1("asd").toString());
console.log(Crypto.SHA256("asdafaf").toString());
console.log(Crypto.SHA224("asdadad").toString());
console.log(Crypto.SHA512("qqqq").toString());
console.log(Crypto.SHA384("asfasfaf").toString());
console.log(Crypto.SHA3(1).toString());
console.log(Crypto.RIPEMD160(7).toString());
