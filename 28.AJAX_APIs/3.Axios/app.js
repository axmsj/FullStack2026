// axios
//   .get('https://www.swapi.tech/api/people/1')
//   .then((res) => {
//     console.log(res.data.result.properties);
//   })
//   .catch((e) => {
//     console.error('ERROR', e);
//   });

// const getStarWarsPerson = async () => {
//   try {
//     const res = await axios.get('https://www.swapi.tech/api/people/1');
//     console.log(res.data.result.properties);
//   } catch (e) {
//     console.log('ERROR', e);
//   }
// };

// getStarWarsPerson();

const jokeBtn = document.querySelector('#jokeBtn');
const ul = document.querySelector('#display');

const addJoke = async () => {
  const text = await getDadJoke();
  const newLI = document.createElement('li');
  newLI.append(text);
  ul.append(newLI);
};

const getDadJoke = async () => {
  try {
    const configHeaders = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', configHeaders);
    return res.data.joke;
  } catch (e) {
    return 'No Jokes Available! Sorry!';
  }
};

jokeBtn.addEventListener('click', () => {
  addJoke();
});
