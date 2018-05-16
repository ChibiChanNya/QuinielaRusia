import axios from 'axios';
import { getToken } from './auth';

const BASE_URL = 'http://localhost:3333';

export {getMatches, getPredictions, savePredictions};

function getMatches() {
  const url = `${BASE_URL}/api/matches/all`;
  return axios.get(url, {headers: {Authorization: getToken()}}).then(response => response.data)
    .catch(e => {
      console.log(e);
      if (e.response.status === 401) {
        console.log("BEEP failed permission");
        this.$router.push({
          name: 'Login'
        })
      }
    });
}

function getPredictions() {
  const url = `${BASE_URL}/api/matches/me`;
  return axios.get(url, {headers: {Authorization: getToken()}}).then(response => response.data)
    .catch(e => {
      console.log(e);
      if (e.response.status === 401) {
        console.log("BEEP failed permission");
        this.$router.push({
          name: 'Login'
        })
      }
    });
}

function savePredictions(matches, userId){
  const url = `${BASE_URL}/api/matches/save`;
  return axios.post(url, {matches:matches, user: userId}, {headers: {Authorization: getToken()}}).then(response => response.data)
    .catch(e => {
      console.log(e);
      if (e.response.status === 401) {
        console.log("BEEP failed permission");
        alert("Tu login ha expirado");
      }
    });
}

