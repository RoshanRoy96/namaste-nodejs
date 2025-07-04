/*
NOTES
* Go to mongodb website
* Create a free M0 cluster
* Create a user (user: roshanroy1121, password: sbOtVhfcY728yLr7)
* Get the connection string like below.
* Install mongodb compass
*/

const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
// const url = 'mongodb+srv://roshanroy1121:sbOtVhfcY728yLr7@mern-vercel.r56h0.mongodb.net/';
const url = "mongodb+srv://user1996:Royshiny1!@mern-vercel.r56h0.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

  const data = {
    firstname: "Ranveer",
    lastname: "Singh",
    city: "Mumbai",
    country: "India",
  };

  // Insert
  const insertResult = await collection.insertOne(data);
  console.log("Inserted documents =>", insertResult);

  // Update
  // const updateResult = await collection.updateOne({city: "Mumbai"}, {$set:{city: "Maharashtra"}});
  // console.log('Updated documents =>', updateResult);

  // Delete
  // const deleteResult = await collection.deleteMany({ firstname: "Deepika", lastname: "Padukone" });
  // console.log('Deleted documents =>', deleteResult);

  // Read
  // const findResult = await collection.find({}).toArray();
  // console.log("Found documents =>", findResult);

  // const countResult = await collection.countDocuments({});
  // console.log("count of documents in the user collection =>", countResult);

  // find all documents with a filter of firstname: Deepika
  const result = await collection.find({firstname: "Deepika"}).toArray();
  console.log("result =>", result);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
