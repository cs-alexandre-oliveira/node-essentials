let express = require("express");

let app = express();

let skierTerms = [
	{
		term: 'Rip',
		defined: 'To move a high rate of speed'
	},
	{
		term: 'Hulk',
		defined: 'To throw your body off of something, usually a natural feature like a cliff'
	},
	{
		term: 'Chowder',
		defined: 'Powder after it has been sufficiently skied'
	}
]

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();
});

app.use(express.static("./public"));

app.use(cors())

app.get('/dictionary-api', function(req, res)	{
	res.json(skierTerms)
})

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;