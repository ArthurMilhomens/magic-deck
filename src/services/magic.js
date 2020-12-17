import axios from 'axios';

const magic = axios.create({
  baseURL: "https://api.scryfall.com"
});

export default magic;