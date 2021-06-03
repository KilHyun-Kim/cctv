import axios from 'axios';
import { merge } from 'ramda';
import shell from 'shelljs';
import testImg from '../images/1.jpg';

// export default async function postImg(path) {
//   try {
//     const result = shell.exec(
//       // curl -u pashi:pashi12345 "http://164.125.190.101:3840/api/deletion/image/"
//       `curl -u pashi:pashi12345 -X POST -F file=@ ${testImg} http://164.125.190.101:3840/api/upload/image`,
//     );
//     console.log(result);
//   } catch (err) {
//     throw err;
//   }
// }
export const DEFAULT_CONFIG = {
  baseURL: process.env.BASE_URL,
  header: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(DEFAULT_CONFIG);

export const contentTypes = {
  FORM_URLENCODED: 'application/x-www-form-urlencoded; charset=UTF-8',
  MULTIPART_FORMDATA: 'multipart/formdata; charset=utf-8',
};

export const API = {
  instance,
  get(url, config) {
    return this.instance.get(url, config);
  },
  post(url, data, contentType = 'application/json', config) {
    return this.instance.post(
      url,
      data,
      merge(config, {
        headers: {
          'Content-Type': contentType,
        },
        auth: {
          user: 'pashi',
          pass: 'pashi12345',
        },
      }),
    );
  },
};
export default API;
