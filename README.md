att-sms-nodejs-demo
===================

This is a fully functioning NodeJS based demo for the AT&amp;T SMS API

To get started, please follow these instructions:

Get your API keys and setup your development environment:
- Go to http://developer.att.com/ to sign up for your developer account
- Make note of your "api key" and "api secret"
- Install NodeJS - http://www.nodejs.org/
- Open a command prompt. Use 'terminal' for Macs and 'cmd' for PCs.
- Create temporary directory
- Navigate into the newly directory
- Copy the file 'app.js' to the newly created directory
- Type 'npm install request' then hit enter
- Type 'npm install connect' then hit enter

Configure your application:
- Open the file (app.js)
- Update the 'api_key' and'api_secret' 
- Update the target cell phone number 
- Save your changes

Send a text message:
- In the newly created directly and your freshly saved file, type 'node app.js'
- Open a browser and go to http://localhost:8080/ 
- Your cell phone should have received a text message!
