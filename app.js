'use strict';
const express = require('express');
const stream=require('stream');
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
app.get("/img/:code/:width?", function(req, res){
        const content = req.params.code;
        let contentWidth=req.params.width;
        if(!contentWidth)
            contentWidth=200;
        const qrStream = stream.PassThrough();
        QRCode.toFileStream(qrStream, content,
                    {
                        type: 'png',
                        width: contentWidth,
                        errorCorrectionLevel: 'H',
                        margin:1
                    }
                );

        qrStream.pipe(res);
});
app.get("/ping", function(req, res){
	res.send("qr-code-generator API");
});

var server = http.createServer(app);
let port=process.env.PORT || 3000;

server.listen( port,()=>console.log(`server running at http://localhost:${port}/`));