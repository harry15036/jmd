http = require('http');
const fs = require('fs');
let file;
function read(error, data ){
	if(error){
		console.log(error)
		return
	}
	// console.log(data.toString('utf-8'));
	file = data.toString('utf-8');
	console.log('Text is read successfully');
}
let AB = ()=>{ console.time()
	fs.readFile('./abc.txt', read);
	console.timeEnd()
}

let BC = ()=>{
	console.time('server');
	const server = http.createServer((req, res)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end(`<h1> hey ! There whats up there it is ${file} </h1>`);
	console.log(http.IncomingMessage);
	console.log(http.ServerResponse);
	console.log('http waiting for  request')
}).listen(8080, ()=>console.log('server running'));
  console.timeEnd('server');
}


AB();
BC();