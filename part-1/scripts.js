const number = 19;
const url = "http://numbersapi.com";

// step 1
(async function getNumFact() {
  const resp = await axios.get(`${url}/${number}?json`);
  console.log(resp.data);
})();

// step 2
const numbers = [1, 4, 13, 19];
(async function getNumbersFacts() {
  const resp = await axios.get(`${url}/${numbers}?json`);
  console.log(resp.data);
})();

// step 3
(async function getNumbersFactsFromArray() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => {
      return $.getJSON(`${url}/${number}?json`);
    })
  );
  facts.forEach(fact => $("#facts").append(`<p>${fact.text}</p>`));
})();
