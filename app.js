'use strict';
const express = require('express');
const path=require('path');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const QRCode = require('qrcode');
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get("/", function(req, res){
	res.sendFile(path.resolve(__dirname,'views',"index.html"));
});
app.get("/img/:code", function(req, res){
    let code=req.params.code;
    console.log(code);
    QRCode.toDataURL(code, { errorCorrectionLevel: 'H' }, function (err, url) {
        res.send(url);
      });
    
    //var qrcode=getQrcode(req.body.sellerName,req.body.vatNumber,req.body.date,req.body.total,req.body.vat);
    //res.json({'QR-Text':qrcode,'Data':req.body});
});
app.get("/ping", function(req, res){
	res.send("qr-code-generator API");
});

var server = http.createServer(app);
let port=process.env.PORT || 3000;

server.listen( port,()=>console.log(`server running at http://localhost:${port}/`));