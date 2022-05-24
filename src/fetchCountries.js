const URL = 'https://restcountries.com/v3.1/name/';

export const fetchCountries = text => {
  return fetch(`${URL}${text}?fields=name,capital,population,flags,languages`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Error fetching data');
  });
};
