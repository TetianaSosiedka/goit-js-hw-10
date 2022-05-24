import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchCountries } from './fetchCountries.js';
import { renderCountries } from './renderCountries.js';

const refs = {
  input: document.querySelector('#search-box'),
};
const DEBOUNCE_DELAY = 300;

refs.input.addEventListener(
  'input',
  debounce(event => {
    handleInputCountry(event)
      .then(data => {
        if (data.length > 10) {
          Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        }
        renderCountries(data);
      })
      .catch(error => {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        renderCountries('');
      });
  }, DEBOUNCE_DELAY),
);

function handleInputCountry(event) {
  const userRequest = event.target.value.trim('');
  return fetchCountries(userRequest);
}