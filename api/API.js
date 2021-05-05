import axios from 'axios';
import { merge } from 'ramda';

export const DEFAULT_CONFIG = {
  baseURL: process.env.development.local.SERVER_API,
  // header:{}
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
  post(url, data, contentType = contentTypes.FORM_URLENCODED, config) {
    return this.instance.post(
      url,
      !!data ? this.makePostData(data, contentType) : null,
      merge(config, {
        headers: {
          'Content-Type': contentType,
        },
      }),
    );
  },
};
