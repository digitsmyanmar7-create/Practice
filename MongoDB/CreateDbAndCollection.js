const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // This line prepares the database but doesn't create it
    const db = client.db("Feb_26_db1");
    console.log("Database '......' selected (but not yet created)");

    // ***** THIS IS THE KEY *****
    // Insert a document into a collection to actually create the database
    const collection = db.collection("Feb26_Colle2");
    const result = await collection.insertOne({ message: "Hello MongoDB!", createdAt: new Date() });
    console.log(`Test document inserted with id: ${result.insertedId}`);
    // ***************************

    console.log("Database '.....' has now been created!");

  } catch (err) {
    console.error("Connection error:", err);
  } finally {
    await client.close();
  }
}

run();

