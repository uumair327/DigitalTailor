const MongoClient = require('mongodb').MongoClient;

// MongoDB Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'userdb';

// Collection Name
const collectionName = 'users';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');

  const db = client.db(dbName);

  // Create a collection to store user data
  db.createCollection(collectionName, (err, collection) => {
    if (err) {
      console.error('Error creating collection:', err);
      return;
    }

    console.log(`Collection "${collectionName}" created`);

    // You can now interact with the "users" collection
    // Insert, query, update, or delete user data here

    // Close the MongoDB connection
    client.close();
  });
});



