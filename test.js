
var qr = require('qr-image');
// var images = require("images");
var fs = require('fs');
/**
 * 根据地址生成二维码
 * 参数 url(string) 地址
 * 参数 callback(Function)
 */
var qrcode = qr.image('https://www.baicu.com', { type: 'png',size : 6 });
qrcode.pipe(fs.createWriteStream('./public/myimg.png'));