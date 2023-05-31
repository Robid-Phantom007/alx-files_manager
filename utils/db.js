import { MongoClient } from 'mongodb';

class DBClient {
  // the constructor creates a client to MongoDB
  constructor() {
    this.host = process.env.DB_HOST || 'localhost';
    this.port = process.env.DB_PORT || 27017;
    this.database = process.env.DB_DATABASE || 'files_manager';
    this.client = new MongoClient(`mongodb://${this.host}:${this.port}`, { useUnifiedTopology: true });
    this.client.connect();
    this.db = this.client.db(this.database);
  }

  // returns true when the connection to MongoDB is a success
  isAlive() {
    if (this.client.isConnected()) {
      return true;
    }
    return false;
  }

  // returns the number of documents in the collection users
  async nbUsers() {
    const docCollection = await this.db.collection('users');
    return docCollection.countDocuments();
  }

  // returns the number of documents in the collection files
  async nbFiles() {
    const docCollection = await this.db.collection('files');
    return docCollection.countDocuments();
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
