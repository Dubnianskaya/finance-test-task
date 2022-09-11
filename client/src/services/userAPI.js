import axios from 'axios';

const BASE_URL = "http://localhost:4000/api/"

axios.defaults.baseURL = BASE_URL;

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function fetchRegister(userData) {
  const data = await axios
    .post('/users/signup', userData)
    .then(res => res.data);
  return data;
}

export async function fetchLogIn(userData) {
  const data = await axios
    .post('/users/login', userData)
    .then(res => res.data);
  return data;
}

export async function fetchLogOut() {
  const data = await axios
    .get('/users/logout')
    .then(res => res.data);
  return data;
}

export async function fetchUsers() {
  const data = await axios
    .get('/users/current')
    .then(res => res.data);
  return data;
}

export async function fetchFavorites(userData) {
  const data = await axios
    .patch('/users/favorite', {favorite: userData})
    .then(res => res.data);
  return data;
}