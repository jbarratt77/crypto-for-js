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

console.log(Crypto.HmacMD5(124124, "key1").toString());
console.log(Crypto.HmacSHA1("asd", "keyx").toString());
console.log(Crypto.HmacSHA256("asdafaf", "some string").toString());
console.log(Crypto.HmacSHA224("asdadad", "4").toString());
console.log(Crypto.HmacSHA512("qqqq", "asd").toString());
console.log(Crypto.HmacSHA384("asfasfaf", "anything").toString());
console.log(Crypto.HmacSHA3(1, "a").toString());
console.log(Crypto.HmacRIPEMD160(7, "").toString());
