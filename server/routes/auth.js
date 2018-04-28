import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';

import User from '../models/user';

const router = express.Router();

router.post('/', (req, res) => {
  const { identifier, password } = req.body;

  User.query({
    where: { email: identifier},
    orWhere: { username: identifier},
  }).fetch().then(user => {
    if (user) {
      if (bcrypt.compareSync(password, user.get('password_digest'))) {
        const token = jwt.sign({
          id: user.get('id'),
          username: user.get('username'),
        }, config.jwtSecret);
        res.json({token});
      } else {
        res.status(401).json({ errors: { form: 'Invalid Credentials: bad password'}});
      }
    } else {
      res.status(401).json({ errors: { form: 'Invalid Credentials: user not found'}});
    }

  });
});

export default router;