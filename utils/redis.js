import { createClient } from 'redis';
import { promisify } from 'util';

class RedisClient {
  constructor() {
    this.client = createClient();
    this.client.on('error', (err) => console.log(err.message));
  }

  // returns true when the connection to Redis is a success
  isAlive() {
    if (this.client.connected) {
      return true;
    }
    return false;
  }

  // returns the Redis value stored for the key
  async get(key) {
    const getVal = await promisify(this.client.get).bind(this.client);
    const val = await getVal(key);
    return val;
  }

  // store value and duration in Redis
  async set(key, val, time) {
    await this.client.set(key, val);
    await this.client.expire(key, time);
  }

  // removes the value in Redis for the key
  async del(key) {
    await this.client.del(key);
  }
}

const redisClient = new RedisClient();
module.exports = redisClient;
