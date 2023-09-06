const MongoClient = require('mongodb').MongoClient;

// MongoDB Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'tailor_management';

// Collection Names
const tailorsCollection = 'tailors';
const ordersCollection = 'orders';
const customersCollection = 'customers';

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

  // Create collections to store tailor, order, and customer data
  await db.createCollection(tailorsCollection);
  await db.createCollection(ordersCollection);
  await db.createCollection(customersCollection);

  console.log(`Collections created: ${tailorsCollection}, ${ordersCollection}, ${customersCollection}`);

  // You can now interact with these collections to manage tailors, orders, and customers

  // Close the MongoDB connection
  client.close();
});


