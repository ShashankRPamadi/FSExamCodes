const MongoClient = require('mongodb').MongoClient;

class Shop {
  constructor(name, rent) {
    this.name = name;
    this.rent = rent;
  }
}

class ShopCollection {
  constructor(uri, dbName, collectionName) {
    this.uri = uri;
    this.dbName = dbName;
    this.collectionName = collectionName;
  }

  async connect() {
    this.client = await MongoClient.connect(this.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    this.db = this.client.db(this.dbName);
    this.collection = this.db.collection(this.collectionName);
    console.log('Connected to MongoDB');
  }

  async disconnect() {
    if (this.client) {
      await this.client.close();
      console.log('Disconnected from MongoDB');
    }
  }

  async create(shop) {
    try {
      const result = await this.collection.insertOne(shop);
      console.log('Shop inserted successfully:', result.ops[0]);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async read() {
    try {
      const shops = await this.collection.find({}).toArray();
      console.log('All Shops:');
      shops.forEach(shop => {
        console.log(`Name: ${shop.name}, Rent: ${shop.rent}`);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async update(filter, update) {
    try {
      const result = await this.collection.updateOne(filter, update);
      if (result.modifiedCount === 1) {
        console.log('Shop updated.');
      } else {
        console.log('Unable to update shop.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async delete(filter) {
    try {
      const result = await this.collection.deleteOne(filter);
      if (result.deletedCount === 1) {
        console.log('Shop deleted.');
      } else {
        console.log('Unable to delete shop.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

// Example usage
async function main() {
  const uri = "mongodb+srv://shashankrpbsc22:shashank26789@cluster0.evkrvkd.mongodb.net/?retryWrites=true&w=majority";
  const dbName = 'Shop';
  const collectionName = 'Shop';

  const shopCollection = new ShopCollection(uri, dbName, collectionName);
  await shopCollection.connect();

  const shop1 = new Shop('Shop 1', 1000);
  await shopCollection.create(shop1);

  const shop2 = new Shop('Shop 2', 1500);
  await shopCollection.create(shop2);

  await shopCollection.read();

  const filter = { name: 'Shop 1' };
  const update = { $set: { rent: 1200 } };
  await shopCollection.update(filter, update);

  const deleteFilter = { name: 'Shop 2' };
  await shopCollection.delete(deleteFilter);

  await shopCollection.read();

  await shopCollection.disconnect();
}

main();
