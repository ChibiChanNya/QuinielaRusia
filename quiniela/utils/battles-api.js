import axios from 'axios';
import { getToken } from './auth';
import Router from '../src/router/index.js';

const BASE_URL = process.env.SERVER_URL;

export {getPublicStartupBattles, getPrivateStartupBattles};

function getPublicStartupBattles() {
  const url = `${BASE_URL}/api/battles/public`;
  return axios.get(url).then(response => response.data);
}

function getPrivateStartupBattles() {
  const url = `${BASE_URL}/api/battles/private`;
  return axios.get(url, {headers: {Authorization: getToken()}}).then(response => response.data)
    .catch(e => {
      console.log(e);
      if (e.response.status === 401) {
        console.log("BEEP failed permission");
        Router.push({
          name: 'Login'
        })
      }
    });
}
