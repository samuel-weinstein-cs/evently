import axios from 'axios';
const api = axios.create({
  baseURL: "http://localhost:3000"
})


export const getUsers = async () => {
  const resp = await api.get('/user');
  return resp;
}
export const getEvents = async () => {
  const resp = await api.get('/event');
  return resp;

}