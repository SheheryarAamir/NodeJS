/*var http = require("http");

http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.end("Hello, NodeJS!!");	
}).listen(8081);

console.log('Server is up and running at localhost:8081');*/


// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();


// Create an event handler as follows
var connectHandler = function connected (){
	console.log('connection succesful');
	
	// Fire the data_received event 
	eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

var data_received  = function received(){
	console.log('data_received');
}

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', data_received);





// Fire the connection event 
eventEmitter.emit('connection');

// listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
  console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");