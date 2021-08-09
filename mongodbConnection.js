const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    const database = client.db('movieskeeper');
    return [client, database];    
        
  } catch (err) {
      console.dir(err);
  }
//   } finally {
//     // Ensures that the client will close when you finish/error    
//     await client.close();
//   }
}

async function disconnectDB(client){
    client.close();
}


async function queryKeeper(query){
    var [client, database] = await connectDB();
    try {
        const keepers = database.collection('keepers');
        return await keepers.find().toArray();
    } catch (err) {
        console.dir(err);
    } finally {
        disconnectDB(client);
    }
}

async function insertKeeper(object){
    var [client, database] = await connectDB();
    try {
        const keepers = database.collection('keepers');
        return await keepers.insertOne(object);
    } catch (err) {
        console.dir(err);
    } finally {
        disconnectDB(client);
    }
}

async function deleteKeeper(){
    var [client, database] = connectDB();
    try {

    } catch (err) {
        console.dir(err)
    } finally {
        disconnectDB(client)
    }
}

module.exports = {queryKeeper, insertKeeper, deleteKeeper}