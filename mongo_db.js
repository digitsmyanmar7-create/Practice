const { MongoClient } = require('mongodb');

// Connection URL for MongoDB 7.0
const url = 'mongodb://127.0.0.1:27017'; // or your Atlas connection string

async function connectToMongoDB() {
  const client = new MongoClient(url);
  
  try {
    // Connect with modern driver
    await client.connect();
    console.log('Connected to MongoDB 7.0 successfully!');
    
    // Access database
    const database = client.db('myDatabase');
    
    // Perform operations
    const collection = database.collection('myCollection');
    
    // Example: Insert a document
    const result = await collection.insertOne({ 
      name: 'John Doe', 
      age: 30,
      timestamp: new Date()
    });
    
    console.log('Document inserted:', result.insertedId);
    
  } catch (error) {
    console.error('Connection error:', error);
  } finally {
    // Close connection
    await client.close();
    console.log('Connection closed');
  }
}

connectToMongoDB();