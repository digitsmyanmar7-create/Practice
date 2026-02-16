const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function updateOneDocument() {
  try {
    await client.connect();
    
    const db = client.db("Feb26_db1");
    const collection = db.collection("Feb26_Colle1");
    
    // Update the first document that matches the filter
    const result = await collection.updateOne(
      { name: "John Doe" },              // Filter: find document with name "Alice"
      { 
        $set: {  
          name: 'Nay',                      // Use $set to update fields
          age: 43,
          city: "Los Angeles",
          updatedAt: new Date()
        },
        $inc: { loginCount: 1 }        // Increment loginCount by 1
      }
    );
    
    console.log("📝 Update Result:");
    console.log(`   Matched: ${result.matchedCount} document(s)`);
    console.log(`   Modified: ${result.modifiedCount} document(s)`);
    console.log(`   Acknowledged: ${result.acknowledged}`);
    
    if (result.matchedCount === 0) {
      console.log("⚠️  No document matched the filter");
    }
    
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
  }
}

updateOneDocument();