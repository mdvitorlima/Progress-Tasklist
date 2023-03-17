require('dotenv').config()

const mongoClient = require("mongodb").MongoClient


mongoClient.connect(process.env.MONGO_CONNECTION)
           .then(conn => global.conn = conn.db(process.env.MONGO_COLLECTION))
           .catch(err => console.log(err))


function findTasks(callback){
    global.conn.collection('tasks').find().toArray(callback);
}


function findOneTask(p_id, callback){
    global.conn.collection('tasks').find({}, { projection: { _id: p_id } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}

const ObjectId = require("mongodb").ObjectId

function findTask(id, callback){
    global.conn.collection('tasks').findOne(new ObjectId(id), callback);
}

function updateTask(id, task, callback){
	
	let description = task.description;
	let deadline = task.deadline;
	let progress = task.progress;
	
    global.conn.collection('tasks').update({_id: new ObjectId(id)}, task, callback);
}


function insertTask(task, callback){
    global.conn.collection('tasks').insert(task, callback);
}

module.exports = {findTasks, insertTask, updateTask, findTask}


