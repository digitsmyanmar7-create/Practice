const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function deleteOneDocument() {
  try {
    await client.connect();
    
    const db = client.db("Feb26_db1");
    const collection = db.collection("Feb26_Colle1");
    
    // Delete the first document that matches the filter
    const result = await collection.deleteOne(
      { name: "Nay" }  // Filter: delete document with name "Alice"
    );
    
    console.log("🗑️ Delete One Result:");
    console.log(`   Deleted: ${result.deletedCount} document(s)`);
    console.log(`   Acknowledged: ${result.acknowledged}`);
    
    if (result.deletedCount === 0) {
      console.log("⚠️  No document matched the filter");
    }
    
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
  }
}

deleteOneDocument();