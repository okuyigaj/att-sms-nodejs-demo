/* AT&T SMS API Demo Instructions

- Go to http://developer.att.com/ to sign up for your developer account and get your "api key" and "api secret."
- Install NodeJS
- Open a command prompt. Use 'terminal' for Macs and 'cmd' for PCs.
- Create temporary directory
- Navigate into the newly directory
- Copy this file (app.js) to the newly created directory
- Type 'npm install request' then hit enter
- Type 'npm install connect' then hit enter
- Open the file (app.js)
- Update the 'api_key' and'api_secret' 
- Update the target cell phone number 
- Type 'node app.js'
- Open a browser and go to http://localhost:8080/ 
- Your cell phone should have received a text message!


*/



var request = require('request');
var connect = require('connect');

const api_key = "9880b7209ebc9f0b0f8dxxxxxxxxxxxx";
const api_secret = "c213e61exxxxxxxx";
const phone_number = "tel:+1425658xxxx" //make sure that this number is an AT&T number and it must be formatted with "tel:+1" and then the number with the area code.
const oauth_endpoint = "https://api.att.com/oauth/token";
const sms_endpoint = "https://api.att.com/sms/v3/messaging/outbox"
	
var app = connect()
	.use(connect.query())
	.use(action)
.listen(8080);

function action(req, resp, next) {
	sendSMS(phone_number, "Hello from alex  33333", resp);
};

function sendSMS(mobilenumber, message, resp) {
	request({
		url: oauth_endpoint,
		method: "POST",
		headers: { "Accept": "application/json", "Content-Type": "application/x-www-form-urlencoded" },
		body: "grant_type=client_credentials&client_id=" + api_key + "&client_secret=" + api_secret + "&scope=SMS"
	} ,
	function (error, response, body){
		request({
			url: sms_endpoint,
			method: "POST",
			headers: { "Authorization": "Bearer " + JSON.parse(body).access_token, "Content-Type": "application/x-www-form-urlencoded" },
			body: "address=" + encodeURIComponent(mobilenumber) + "&message=" + encodeURIComponent(message)
		} , function (error, response, body){ resp.write(body); resp.end(); });
	})
};
