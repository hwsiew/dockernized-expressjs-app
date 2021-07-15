/**
 * Initialization script to initialize project with respective enviroment variables and output a .env file.
 * 
 * Supported: 
 * 	EXPRESS_PORT 	- listening port of rexpress server
 * 	MONGO_USER		- MongoDB username
 * 	MONGO_PASSWORD	- MongoDB password
 * 	MONGO_DATABASE	- Database name to connect in MongoDB
 *  SESSION_SECRET  - Session secret for hashing
 *  JWT_SECRET		- JWT secret for hashing
 *  JWT_ISSUER		- JWT issuer claim 
 *  JWT_AUDIENCE	- JWT audience claim
 */
 const fs 	   	= require('fs');
 const readline = require("readline");
 const rl 		= readline.createInterface({
	 input: process.stdin,
	 output: process.stdout
 });
 
 // to get the existing .env file if any
 require('dotenv').config();

 // define all question here with the env variable name as key
 let questions = [
	{
		question: 'Port to listen for express?',
		key: 'EXPRESS_PORT'
	}, 
	{
		question: 'Docker image tag for express app?',
		key: 'DOCKER_IMAGE_TAG'
	}
 ];

 // default value which will be overrided if provide
 let answers = {
	'EXPRESS_PORT'	: process.env.EXPRESS_PORT || 3000,
	'DOCKER_IMAGE_TAG' : 'yourrepository/imagetag'
 }

 // async function to ask question and update answers
 async function ask(){
	try{

		for(let q of questions){
			answers[q.key] = await new Promise( resolve => {
				rl.question(`${q.question} (default: ${answers[q.key]}) `, answer => resolve(answer || answers[q.key]) )
			});;
		}
		
		let content = '';
		for(const [key,value] of Object.entries(answers)){
			content += `${key}=${value}\n`;
		}
		fs.writeFileSync('.env', content);

		rl.close();
	} catch(err) {
		console.log('Question rejected', err);
	}
	
 };

rl.on("close", function() {
	console.log("\nIt is all set! Enjoy development");	 
	process.exit(0);
});

ask(); // ask the questions