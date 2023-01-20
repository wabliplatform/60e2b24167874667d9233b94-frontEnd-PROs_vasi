const path = require('path');

module.exports = {
  entry: {
	'Home' : './javascript/Home.js',
	'mcandidates' : './javascript/mcandidates.js',
	'allcandidates' : './javascript/allcandidates.js',
	'candidate' : './javascript/candidate.js',
	'cmunicipality' : './javascript/cmunicipality.js',
	'upmunicipality' : './javascript/upmunicipality.js',
	'ccandidate' : './javascript/ccandidate.js',
	'cconsultant' : './javascript/cconsultant.js',
	'consultant' : './javascript/consultant.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};