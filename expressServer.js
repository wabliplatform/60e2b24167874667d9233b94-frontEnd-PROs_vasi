const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

class ExpressServer {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.setupMiddleware();
    }
  
    setupMiddleware() {
      this.app.use(cors());
      this.app.use(bodyParser.json({ limit: '14MB' }));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(__dirname));
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','home.html')));
			this.app.get('/home', (req, res) => res.sendFile(path.join(__dirname,'html','home.html')));
			this.app.get('/home/:id', (req, res) => res.sendFile(path.join(__dirname,'html','home.html')));
			this.app.get('/mcandidates', (req, res) => res.sendFile(path.join(__dirname,'html','mcandidates.html')));
			this.app.get('/mcandidates/:id', (req, res) => res.sendFile(path.join(__dirname,'html','mcandidates.html')));
			this.app.get('/allcandidates', (req, res) => res.sendFile(path.join(__dirname,'html','allcandidates.html')));
			this.app.get('/allcandidates/:id', (req, res) => res.sendFile(path.join(__dirname,'html','allcandidates.html')));
			this.app.get('/candidate', (req, res) => res.sendFile(path.join(__dirname,'html','candidate.html')));
			this.app.get('/candidate/:id', (req, res) => res.sendFile(path.join(__dirname,'html','candidate.html')));
			this.app.get('/cmunicipality', (req, res) => res.sendFile(path.join(__dirname,'html','cmunicipality.html')));
			this.app.get('/cmunicipality/:id', (req, res) => res.sendFile(path.join(__dirname,'html','cmunicipality.html')));
			this.app.get('/ccandidate', (req, res) => res.sendFile(path.join(__dirname,'html','ccandidate.html')));
			this.app.get('/ccandidate/:id', (req, res) => res.sendFile(path.join(__dirname,'html','ccandidate.html')));
			this.app.get('/updatemun', (req, res) => res.sendFile(path.join(__dirname,'html','updatemun.html')));
			this.app.get('/updatemun/:id', (req, res) => res.sendFile(path.join(__dirname,'html','updatemun.html')));
			
    }
  
    launch() {
          http.createServer(this.app).listen(this.port);
          console.log(`Listening on port ${this.port}`);
    }
  
  
    async close() {
      if (this.server !== undefined) {
        await this.server.close();
        console.log(`Server on port ${this.port} shut down`);
      }
    }
  }
  
  module.exports = ExpressServer;