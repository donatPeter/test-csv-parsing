import { ajax } from 'rxjs/ajax';

const API_URL: any = 'http://localhost:5000/'

export const ajaxClient = {
  get: (url: string) =>
    ajax.getJSON(`${API_URL}${url}`, setDefaultHeaders()),
  post: (url: string, body: any = {}) =>
    ajax.post(`${API_URL}${url}`, body, setDefaultHeaders()),
};

function setDefaultHeaders(headers: { [key: string]: string } = {}) {
  return {
    ...headers,
    'Content-Type': 'application/json'
  }
}

