import axios from 'axios';
const api = axios.create({
  baseURL: "http://localhost:3000" //https://pure-mesa-34992.herokuapp.com/
})

export const getUsers = async () => {
  const resp = await api.get('/user');
  return resp;
}
export const getEvents = async () => {
  const resp = await api.get('/event');
  return resp;
}

export const getByCategory = async (category) => {
  const resp = await api.get(`/event/category/${category}`);
  return resp;
}

export const getUserProfile = async (id) => {
  const resp = await api.get(`/user/${id}`)
  return resp
}


export const loginUser = async (loginData) => {
  const resp = await api.post('/user/login', loginData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;

}

export const registerUser = async (registerData) => {
  const resp = await api.post('/user/register', registerData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  //console.log(resp.data)
  return resp.data.user;
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/user/verify');
    return resp.data;
  }
}
export const createEvent = async (newEvent) => {
  const resp = await api.post('/event', newEvent);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;

}

export const deleteEvent = async (eventToDeleteId) => {
  await api.delete(`/event/${eventToDeleteId}`);
}

export const updateEvent = async (eventId, updateEvent) => {
  const resp = await api.put(`/event/${eventId}`, updateEvent);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const attendEvent = async(eventId) => {
  await api.post(`/event/${eventId}/attending`);
}

export const deleteAttendEvent = async(eventId) => {
  await api.delete(`/event/${eventId}/attending`);
}

export const getAttendEvent = async(eventId) => {
  const resp = await api.get(`/event/${eventId}/attending`);
  return resp;
}

export const getAttendUser = async(userId) => {
  const resp = await api.get(`/user/${userId}/attending`);
  return resp;
}
