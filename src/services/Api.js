import axios from 'axios'
const API = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
function queryObj2queryStr (queryObj) {
  let queryStr = ''
  for (const q in queryObj) {
    queryStr += `${q}=${queryObj[q]}&`
  }
  return queryStr
}

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
  async getAllEvents (queryObj) {
    const response = await API.get(`/events?${queryObj2queryStr(queryObj)}`)
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
  },
  async getUser () {
    const response = await API.get('/me/profile',
      {
        headers: {
          token: localStorage.getItem('token')
        }
      })
    return response.data
  },
  async updateSkills (selectedSkills) {
    const response = await API.put('/me/profile/skills', {
      ...selectedSkills
    },
    {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    return response.data
  }

}
