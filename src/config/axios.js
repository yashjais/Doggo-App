import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://api.backendless.com/D0A3D923-54D9-1A0F-FF40-FE6E51E06100/A0F9167B-6B71-4F4B-99BD-7E03CBC4D9B7/users'
})

export default axios