import Validator from 'validator';

export default function validateInput(data) {
  let errors = {};
  if (Validator.isEmpty(data.identifier)) {
    errors.identifier = 'This field is required';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }
  

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}