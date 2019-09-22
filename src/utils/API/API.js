import axios from 'axios'

export default axios.create({
  baseURL: 'https://895o1wozfh.execute-api.eu-west-2.amazonaws.com/prod/',
  responseType: 'json'
})