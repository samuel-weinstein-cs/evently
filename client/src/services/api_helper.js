import axios from 'axios';
const api = axios.create({
  baseURL: "http://localhost:3000"
})


export const getUsers = async (loginData) => {
  const resp = await api.get('/user', loginData);
  return resp;

}