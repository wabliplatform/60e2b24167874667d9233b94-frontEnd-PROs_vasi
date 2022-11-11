const path = require('path');

module.exports = {
  entry: {
	'mcandidates' : './javascript/mcandidates.js',
	'allcandidates' : './javascript/allcandidates.js',
	'candidate' : './javascript/candidate.js',
	'cmunicipality' : './javascript/cmunicipality.js',
	'upmunicipality' : './javascript/upmunicipality.js',
	'ccandidate' : './javascript/ccandidate.js',
	'cconsultant' : './javascript/cconsultant.js',
	'consultant' : './javascript/consultant.js',
	'Page10' : './javascript/Page10.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};