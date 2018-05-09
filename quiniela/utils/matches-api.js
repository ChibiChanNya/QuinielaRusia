import axios from 'axios';
import { getAccessToken } from './auth';

const BASE_URL = 'http://localhost:3333';

export {getMatches, getPredictions};

function getMatches() {
  const url = `${BASE_URL}/api/matches/all`;
  return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then(response => response.data);
}


function getPredictions() {
  const url = `${BASE_URL}/api/matches/me`;
  return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then(response => response.data);
}
