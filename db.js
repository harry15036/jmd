const client = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/myDB';
client.connect(url, async(err,dbclient)=>{
	if(err)
		throw(err)
	const db1 = dbclient.db();
	console.log('connection established');
let cursor = db1.collection("Players").find({});
cursor.forEach((err,data)=>{
	console.log(data);
			})
	//dbclient.close();
})