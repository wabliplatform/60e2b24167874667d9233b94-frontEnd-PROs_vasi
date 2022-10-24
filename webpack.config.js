const path = require('path');

module.exports = {
  entry: {
	'home' : './javascript/home.js',
	'municipality' : './javascript/municipality.js',
	'candidate' : './javascript/candidate.js',
	'cmunicipality' : './javascript/cmunicipality.js',
	'ccandidate' : './javascript/ccandidate.js',
	'updatemun' : './javascript/updatemun.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};