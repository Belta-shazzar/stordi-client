import axios from 'axios';
import store from '../store'

axios.defaults.baseURL = 'http://localhost:7000/api/v1'
// axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('token')}`
const user = store.getters['user'];
axios.defaults.headers.common['authorization'] = `Bearer ${user.token}`