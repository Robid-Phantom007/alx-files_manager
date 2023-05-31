import sha1 from 'sha1';
import { v4 as uuidv4 } from 'uuid';
import dbClient from '../utils/db';
import redisClient from '../utils/redis';

class AuthController {
  //  sign-in the user by generating a new authentication token
  static async getConnect(req, res) {
    const authData = req.header('Authorization');
    let emailPswd = authData.split(' ')[1];
    const buff = Buffer.from(emailPswd, 'base64');
    emailPswd = buff.toString('ascii');

    // contains email & psswd
    const userData = emailPswd.split(':');
    if (userData.length !== 2) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    // Psswd
    const hashedPsswd = sha1(userData[1]);

    const users = dbClient.db.collection('users');
    users.findOne({ email: userData[0], password: hashedPsswd }, async (err, user) => {
      if (user) {
        const token = uuidv4();
        const key = `auth_${token}`;
        await redisClient.set(key, user._id.toString(), 60 * 60 * 24);
        res.status(200).json({ token });
      } else {
        res.status(401).json({ error: 'Unauthorized' });
      }
    });
  }

  // sign-out the user based on the token
  static async getDisconnect(req, res) {
    const token = req.header('X-Token');
    const key = `auth_${token}`;
    const id = await redisClient.get(key);
    if (id) {
      await redisClient.del(key);
      res.status(204).json({});
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  }
}

module.exports = AuthController;
