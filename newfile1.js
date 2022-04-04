const fs = require('fs');
fs.readFile('./abc.txt' ,(err, data)=>{
	if(err)
		console.log('there is an error');
	console.log(data.toString('ASCII'));
})
fs.appendFile('./abc.txt', 'This is the edited text', err=>{
	/*if(err)
		console.log ('error')*/
	});
