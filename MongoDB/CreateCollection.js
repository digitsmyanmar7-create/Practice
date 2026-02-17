const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function implicitCreation() {
  try {
    await client.connect();
    
    const db = client.db("Feb26_db1");
    
    // Collections are created automatically when you insert data
    const collection = db.collection("users");  // This doesn't create it yet
    
    // This actually creates the collection
    const result = await collection.insertOne({
      name: "John Doe",
      email: "john@example.com",
      createdAt: new Date()
    });
    
    console.log("✅ Collection 'users' created implicitly by inserting data");
    console.log(`Inserted document ID: ${result.insertedId}`);
    
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
  }
}

implicitCreation();