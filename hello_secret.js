const express = require('express')
const app = express()

var SECRET_KEY = "ashdjfhakjs";
var KEY = "ajskdjfklasdf";
var AWS_SECRET_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";
var AWS_SECRET_KEY_ID = "AKIAIOSFODNN7EXAMPLE"
var AUTH_KEY = '5I9nCD$[Hd&qng|BvI?[GpKMosjn341jN9yuEWX[a=u}2frlM4M]jI/Wtc!°?%E3';
var SECURE_AUTH_KEY = 'A=[To;^M4_G7qrhJb*dHg9*rp@9°|#r[Gda2Ef^Y-fgY-|%AQ/2SJ=hjsw-DHI3U';
var LOGGED_IN_KEY = '.q§([{XSIUS|Qn7Ms-5[Q07n8I6Vh5XoFt5vWn&Qk*Y°M1cY8XJm:b~OhWiN9yu/';
var NONCE_KEY = 'hS5%]A_Eea<A^5x%+CSY32w2.+Gr§?,bW~3G}OI#$n9KK=r%>=)^i%vi/Ayx&O1Q';
var AUTH_SALT = '-l2qp8qO575MG~Ib^b°HS{&KJz*p§_+R°gVN|~f?hAotEV!M7&K-7p7UVmqw-Jli';
var SECURE_AUTH_SALT = 'UBWRob8?g?heLjrT§zSBOE2PA§q4MmKk*Oq9M/vi!K{9FO;!EIieY8(R_/~%uV1_';
var LOGGED_IN_SALT = '%q>L>t|i@IgkU5RNMzz-0PBhN1w%3OH$flR$ot.!#d,(|Y^JIwX8SzM°CK<w^6O)';
var NONCE_SALT = 'jaqC@RcQt@8]b@jX@fwsUZ9,d/MnYs7W@aiqF1rDDv3-$zY,Z)|_X[R(e{7I9q4!';

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
