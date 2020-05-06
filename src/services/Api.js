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

  async getAllEvents (query) {
    let str = ''
    for (const q in query) {
      str += `${q}=${query[q]}&`
    }
    const response = await API.get(`/events?${str}`)
    return response.data
  },

  async getSkills () {
    const response = await API.get('/skills')
    return response.data
  },

  async getEvent (id) {
    const response = await API.get(`/events/${id}`)
    return response.data
  },
  async getFavorites () {
    const response = await API.get('/me/favorites',
      {
        headers: {
          token: localStorage.getItem('token')
        }
      })
    return response.data
  },
  async addFavorites (eventId) {
    const response = await API.post('/me/favorites', {
      ...eventId
    },
    {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    return response.data
  },
  async deleteFavorite (eventId) {
    const response = await API.delete(`/me/favorites/${eventId}`,
      {
        headers: {
          token: localStorage.getItem('token')
        }
      }
    )
    return response.data
  }

}
