import express from 'express';
import validateInput from '../shared/validations/singup';

const router = express.Router();

router.post('/', (req, res) => {
  const {errors, isValid } = validateInput(req.body);
  console.log(req.body, errors, isValid);
  if (isValid) {
    res.json({ success: true});
  } else {
    res.status(400).json(errors);
  }
});

export default router;