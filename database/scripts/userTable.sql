const MongoClient = require('mongodb').MongoClient;

// MongoDB Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'tailor_management';

// Collection Names
const usersCollection = 'users';
const tailorsCollection = 'tailors';
const ordersCollection = 'orders';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
client.connect(async (err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');

  const db = client.db(dbName);

  // Create collections to store user, tailor, and order data
  await db.createCollection(usersCollection);
  await db.createCollection(tailorsCollection);
  await db.createCollection(ordersCollection);

  console.log(`Collections created: ${usersCollection}, ${tailorsCollection}, ${ordersCollection}`);

  // You can now interact with these collections to manage users, tailors, and orders

  // Close the MongoDB connection
  client.close();
});




