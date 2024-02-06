import axios from 'axios'

const API_URL = 'https://valorant-api.com/v1'

const api = axios.create({
    baseURL: API_URL,
})

export { api }
