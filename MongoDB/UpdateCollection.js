const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);


async function renameCollection() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    
    const db = client.db("mydb_Feb_26_two");
    
    // Rename collection from "old_name" to "new_name"
    await db.collection("mydb_Feb_26_two").rename("Feb26_1");
    
    console.log("Collection renamed successfully!");
    
  } catch (err) {
    console.error("Error renaming collection:", err);
  } finally {
    await client.close();
  }
}

renameCollection();
