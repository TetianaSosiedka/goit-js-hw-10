import './css/styles.css';
import debounce from 'lodash.debounce';

import { fetchCountries } from './fetchCountries.js';
import { renderCountries } from './renderCountries.js';

const refs = {
  input: document.querySelector('#search-box'),
};
const DEBOUNCE_DELAY = 1000;

refs.input.addEventListener(
  'input',
  debounce(() => {
    handleInputCountry().then(data => renderCountries(data));
  }, DEBOUNCE_DELAY),
);

function handleInputCountry() {
  const text = refs.input.value;
  text.trim('');
  return fetchCountries(text);
}
