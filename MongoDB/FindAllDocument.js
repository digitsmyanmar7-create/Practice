const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function findAllDocuments() {
  try {
    await client.connect();
    
    const db = client.db("Feb26_db1");
    const collection = db.collection("Feb26_Colle1");
    
    // Find all documents
    const cursor = collection.find({});
    
    // Convert cursor to array
    const documents = await cursor.toArray();
    
    console.log(`📊 Found ${documents.length} document(s):`);
    console.log(JSON.stringify(documents, null, 2));
    
  } finally {
    await client.close();
  }
}

findAllDocuments();