const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  name: String,
  rent: Number
});

const Shop = mongoose.model('Shop', shopSchema);

class ShopCollection {
  constructor(uri, dbName, collectionName) {
    this.uri = uri;
    this.dbName = dbName;
    this.collectionName = collectionName;
  }

  async connect() {
    await mongoose.connect(this.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  }

  async disconnect() {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }

  async create(shopName, shopRent) {
    try {
      const shop = new Shop({ name: shopName, rent: shopRent });
      const createdShop = await shop.save();
      console.log('Shop inserted successfully:', createdShop);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async read() {
    try {
      const shops = await Shop.find();
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
      const result = await Shop.updateOne(filter, update);
      if (result.nModified === 1) {
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
      const result = await Shop.deleteOne(filter);
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

  await shopCollection.create('Shop 1', 1000);
  await shopCollection.create('Shop 2', 1500);

  await shopCollection.read();

  const filter = { name: 'Shop 1' };
  const update = { rent: 1200 };
  await shopCollection.update(filter, update);

  const deleteFilter = { name: 'Shop 2' };
  await shopCollection.delete(deleteFilter);

  await shopCollection.read();

  await shopCollection.disconnect();
}

main();
