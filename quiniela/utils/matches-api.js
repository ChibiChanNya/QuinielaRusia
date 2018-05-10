import axios from 'axios';
import { getToken } from './auth';

const BASE_URL = 'http://localhost:3333';

export {getMatches, getPredictions};

function getMatches() {
  const url = `${BASE_URL}/api/matches/all`;
  return axios.get(url).then(response => response.data);
}


function getPredictions() {
  const url = `${BASE_URL}/api/matches/me`;
  return axios.get(url, {headers: {Authorization: getToken()}}).then(response => response.data)
    .catch(e => {
      this.errors.push(e);
      if (e.response.status === 401) {
        this.$router.push({
          name: 'Login'
        })
      }
    });
}
