import express from 'express';
import commonValidations from '../shared/validations/singup';
import bcrypt from 'bcrypt';

import User from '../models/user';

const router = express.Router();

function validateInput(data, otherValidations) {
  let { errors, isValid } =  otherValidations(data);
  
  if (isValid) {
    return User.query({
      where: { email: data.email},
      orWhere: { username: data.username},
    }).fetch().then(user => {
      if (user) {
        if (user.get('username') === data.username) {
          errors.username = 'Username already used';
        }
        if (user.get('email') === data.email) {
          errors.email = 'Email already used';
        }
      }

      return {
        errors,
        isValid: Object.keys(errors).length === 0
      };
    });
  } else {
    return {errors, isValid};
  }
}

router.post('/', (req, res) => {
  validateInput(req.body, commonValidations).then(({errors, isValid}) => {
    if (isValid) {
      const { username, email, password, timezone } = req.body;
      const password_digest = bcrypt.hashSync(password, 10);
  
      User.forge({ 
        username, email, timezone, password_digest
      }, { hasTimestamps: true } ).save()
        .then(user => res.json({ success: true}))
        .catch(error => res.status(500).json({error}));
    } else {
      res.status(400).json(errors);
    }
  });
  
});

export default router;