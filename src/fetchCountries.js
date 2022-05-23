const URL = 'https://restcountries.com/v3.1/name/';

export const fetchCountries = text => {
  return fetch(`${URL}${text}`)
    .then(response => response.json())
    .then(data => data);
};
