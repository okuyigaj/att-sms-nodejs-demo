att-sms-nodejs-demo
===================

This is a fully functioning NodeJS based demo for the AT&amp;T SMS API

To get started, please follow these instructions:

<H3>Get your API keys and setup your development environment:</H3>
- Go to http://developer.att.com/ to sign up for your developer account
- Make note of your "api key" and "api secret"
- Install NodeJS - http://www.nodejs.org/
- Open a command prompt. Use 'terminal' for Macs and 'cmd' for PCs.
- Create temporary directory
- Navigate into the newly directory
- Copy the file 'app.js' to the newly created directory
- Type 'npm install request' then hit enter
- Type 'npm install connect' then hit enter

<H3>Configure your application:</H3>
- Open the file called 'app.js'
- Update the 'api_key' and 'api_secret' 
- Update the target cell phone number 
- Save your changes

<H3>Send a text message:</H3>
- In the newly created directly and your freshly saved file, type 'node app.js'
- Open a browser and go to http://localhost:8080/ 
- Your cell phone should have received a text message!

<h3>Development Notes</H3>
- make sure that your target number is an AT&T number
- Make sure that the formate of the "phone_number" variable is "tel:+1" and then the area code plus your number
- Google Voice numbers are not supported 
