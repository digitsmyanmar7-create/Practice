const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function dropDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    
    // Get the database
    const db = client.db("mydb_Feb_26_two");
    
    // Drop the database
    await db.dropDatabase();
    
    console.log("Database '....' deleted successfully!");
    
  } catch (err) {
    console.error("Error dropping database:", err);
  } finally {
    await client.close();
  }
}

dropDatabase();