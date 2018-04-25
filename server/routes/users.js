import express from 'express';
import Validator from 'validator';

const router = express.Router();

function validateInput(data) {
  let errors = {};
  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.username)) {
    errors.username = 'This field is required';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }
  if (Validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'This field is required';
  }

  if (!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Passwords must match';
  }

  if (Validator.isEmpty(data.timezone)) {
    errors.timezone = 'This field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}

router.post('/', (req, res) => {
  const {errors, isValid } = validateInput(req.body);
  console.log(req.body, errors, isValid);
  if (!isValid) {
    res.status(400).json(errors);
  }
});

export default router;