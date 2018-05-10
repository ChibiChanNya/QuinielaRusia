import decode from 'jwt-decode';
import Router from '../src/router/index.js';
const BASE_URL = 'http://localhost:3333';


export function login() {
  move('Login')
}

export function logout() {
  localStorage.removeItem('jwtToken');
  move('/')
}

export function requireAuth(to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
}

function move(name){
  Router.push({
    name: name
  })
}


export function getToken(){
  return localStorage.getItem('jwtToken');
}

export function start_auth(provider){
  return BASE_URL + '/api/auth/' + provider + '/start'
}


// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name) {
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

export function isLoggedIn() {
  const idToken = getToken();
  return !!idToken && !isTokenExpired(idToken);
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}
