import * as ssl from '../open-ssl.js'

const version = ssl.runCommandSync("-v");

const s = "OpenSSL 3.2.3 3 Sep 2024 (Library: OpenSSL 3.2.3 3 Sep 2024)\r\n";

console.log(version.split(' '), version === s);

// openssl>node ./test/testing.js
// [
//   'OpenSSL',   '3.2.3',
//   '3',         'Sep',
//   '2024',      '(Library:',
//   'OpenSSL',   '3.2.3',
//   '3',         'Sep',
//   '2024)\r\n'
// ] true