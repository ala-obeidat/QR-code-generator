const express = require('express');
const path = require('path');
const http = require('http'); 
 

const app = express();
app
  .set('port', process.env.PORT || 80)
  .disable('x-powered-by')
  .use(express.static(__dirname))
  .get('*', (req, res) => {
    res.sendFile(
      path.join(__dirname,  'index.html'),
    );
  });
  
const httpServer = http.createServer(app); 

const port = app.get('port');

httpServer.listen(port, () => console.log(`server is running at ${port}`)); 