const refs = {
  list: document.querySelector('.country-list'),
};
export const renderCountries = arrCountries => {
  const markup = arrCountries
    .map(({ name, capital, population, flags, languages }) => {
      return `<li>
      <p>${name.official}</p>
         <p>${capital}</p>
          <p> ${population}</p>
          <p> ${flags.svg}</p>
          <p> ${languages}</p>
        </li>`;
    })
    .join('');
  refs.list.innerHTML = markup;
};
