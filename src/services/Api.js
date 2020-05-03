import axios from 'axios'
const API = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default {
  async signup (newUser) {
    const response = await API.post('/auth/signup', {
      ...newUser
    })
    return response.data
  },
  async login (user) {
    const response = await API.post('/auth/login', {
      ...user
    })
    return response.data
  },
  async getAllEvents (place, skills, offers, dispo) {
    // console.log(place)
    // console.log(offers)
    const response = await API.get(`/events?p=${place}&${skills}&${offers}&${dispo}`)
    return response.data
  },
  async getEvent (id) {
    const response = await API.get(`/events/${id}`)
    return response.data
  }
}
