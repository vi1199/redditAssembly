const CONFIG = {
  baseUrl: 'http://www.reddit.com',
};
const API_PATH = {
  getAllPics: '/r/pics/.json?jsonp=',
};
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
const call = (method, url, path) => {
  let fullurl = url + path;
  return fetch(fullurl, {
    method,
    headers,
  })
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => err);
};

const Network = {
  getPics: () => {
    return call('get', CONFIG.baseUrl, API_PATH.getAllPics);
  },
};
export {Network};
