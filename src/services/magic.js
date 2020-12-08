import axios from 'axios';

const magic = axios.create({
  baseURL: "https://api.magicthegathering.io/v1"
});

export default magic;