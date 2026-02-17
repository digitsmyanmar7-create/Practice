const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function dropCollection() {
  try {
    await client.connect();
    
    const db = client.db("Feb26_db1");
    const collectionName = "users";
    
    // Drop the collection
    await db.collection(collectionName).drop();
    
    console.log(`Collection '${collectionName}' deleted successfully!`);
    
  } catch (err) {
    console.error("Error dropping collection:", err);
  } finally {
    await client.close();
  }
}

dropCollection();