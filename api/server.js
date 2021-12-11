const express = require('express');
var cors = require('cors')
const fs = require('fs');
const app = express()
app.use(cors())
app.use(express.json()) 

app.post('/', function routeHandler(req, res) {
    const data  = req.body.txt
    filePath = __dirname + '/data.txt'

	fs.appendFile(filePath, JSON.stringify(data), function(err) {
		if (err) { throw err }
		res.status(200).json({
			message: "File successfully written"
		})
    })
    console.log(req.body.txt)
    res.send('ok');
  });
app.listen(5000)