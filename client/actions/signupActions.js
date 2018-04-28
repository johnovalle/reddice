import axios from 'axios';

export const userSignupRequest = (userData) => {
  return dispatch => {
    return axios.post('/api/users', userData);
  }
}

export const doesUserExist = (identifier) => {
  return dispatch => {
    return axios.get(`/api/users/${identifier}`);
  }
}