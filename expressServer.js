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
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','Home.html')));
			this.app.get('/Home', (req, res) => res.sendFile(path.join(__dirname,'html','Home.html')));
			this.app.get('/Home/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Home.html')));
			this.app.get('/mcandidates', (req, res) => res.sendFile(path.join(__dirname,'html','mcandidates.html')));
			this.app.get('/mcandidates/:id', (req, res) => res.sendFile(path.join(__dirname,'html','mcandidates.html')));
			this.app.get('/allcandidates', (req, res) => res.sendFile(path.join(__dirname,'html','allcandidates.html')));
			this.app.get('/allcandidates/:id', (req, res) => res.sendFile(path.join(__dirname,'html','allcandidates.html')));
			this.app.get('/candidate', (req, res) => res.sendFile(path.join(__dirname,'html','candidate.html')));
			this.app.get('/candidate/:id', (req, res) => res.sendFile(path.join(__dirname,'html','candidate.html')));
			this.app.get('/cmunicipality', (req, res) => res.sendFile(path.join(__dirname,'html','cmunicipality.html')));
			this.app.get('/cmunicipality/:id', (req, res) => res.sendFile(path.join(__dirname,'html','cmunicipality.html')));
			this.app.get('/upmunicipality', (req, res) => res.sendFile(path.join(__dirname,'html','upmunicipality.html')));
			this.app.get('/upmunicipality/:id', (req, res) => res.sendFile(path.join(__dirname,'html','upmunicipality.html')));
			this.app.get('/ccandidate', (req, res) => res.sendFile(path.join(__dirname,'html','ccandidate.html')));
			this.app.get('/ccandidate/:id', (req, res) => res.sendFile(path.join(__dirname,'html','ccandidate.html')));
			this.app.get('/cconsultant', (req, res) => res.sendFile(path.join(__dirname,'html','cconsultant.html')));
			this.app.get('/cconsultant/:id', (req, res) => res.sendFile(path.join(__dirname,'html','cconsultant.html')));
			this.app.get('/consultant', (req, res) => res.sendFile(path.join(__dirname,'html','consultant.html')));
			this.app.get('/consultant/:id', (req, res) => res.sendFile(path.join(__dirname,'html','consultant.html')));
			
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