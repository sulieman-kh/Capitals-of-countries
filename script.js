const getJSON = function (url, errorMsg = 'что-то пошло не так') {
  return fetch(url)
    .then(response => {
      if (!response.ok)
        throw new Error(`${errorMsg} (${response.status})`);
      return response.json();
    });
};

const getCapitals = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`)
    ]);
    console.log(data.map(d => d[0].capital));

  } catch (err) {
    console.err(err);
  }
};
getCapitals('russia', 'canada', 'uae');
