const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function insertOneDocument() {
  try {
    await client.connect();
    
    const db = client.db("Feb26_db1");
    const collection = db.collection("Feb26_Colle1");
    
    // Single document to insert
    const user = {
      name: "John Doe",
      email: "john@example.com",
      age: 30,
      city: "New York",
      status: "active",
      createdAt: new Date()
    };
    
    // Insert the document
    const result = await collection.insertOne(user);
    
    console.log("✅ Document inserted successfully!");
    console.log(`Inserted ID: ${result.insertedId}`);
    console.log(`Acknowledged: ${result.acknowledged}`);
    
  } catch (err) {
    console.error("Error inserting document:", err);
  } finally {
    await client.close();
  }
}

insertOneDocument();