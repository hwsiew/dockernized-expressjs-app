const path = require("path");
const express = require('express');

const EXPRESS_PORT = process.env.PORT || 3000;

const app 	= express();

app.use(express.json());		// to support json-encoded body, e.g. {"name":"foo", "age": 23}
app.use(express.urlencoded({ extended:true })); 	// to support URL-encoded body, e.g. name=foo&age=

app.get('/', (req, res, next) => {
	res.send('Hello World - All Set!');
})

app.listen(EXPRESS_PORT, () => console.info(`[express] listening on port ${EXPRESS_PORT}`));