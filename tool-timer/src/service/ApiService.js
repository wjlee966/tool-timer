import { API_BASE_URL } from '../app-config';

export function call(api, method, request) {
  let options = {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    url: API_BASE_URL + api,
    method: method,
  };

  if (request) {
    // GET method
    options.body = JSON.stringify(request);
  }

  return fetch(options.url, options).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        // response.ok 가 true 이면 정상적인 리스폰스를 받은 것, 아니면 에러 리스폰스를 받은 것
        return Promise.reject(json);
      }
      return json;
    })
  );
}
