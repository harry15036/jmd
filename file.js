const fs = require('fs');
const http = require('http');
function oop(){
	for(let i = 0 ; i<1000; i++){
		p = p+i;
	}
	console.log(p);
}

function read(error, data ){
	if(error){
		console.log(error)
		return
	}
	console.log(data.toString('utf-8'));
	console.log('Text is read successfully')
}


let p =0;

console.log('there it is '); 						//simple
/*const server = http.createServer((req,res)=>{
	res.setHeader('Content-Type', 'Text/HTML')
	res.end('THis')}).listen(8080); */				//async
oop();  
fs.readFile('./abe.txt', read);                                           //simple
setImmediate(()=>fs.readFile('./abc2.txt', read)); 				     //asyn
let a=5 ; 
let b=6 ;
console.log(a+b);