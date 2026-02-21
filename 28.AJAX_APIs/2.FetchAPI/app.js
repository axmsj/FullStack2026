// fetch('https://www.swapi.tech/api/people/1/')
//   .then((res) => {
//     console.log('RESOLVED', res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.result.properties.name);
//     return fetch('https://www.swapi.tech/api/people/2/');
//   })
//   .then((res) => {
//     console.log('2nd Resolved', res);
//     return res.json();
//   })
//   .then((data) => console.log(data.result.properties.name))
//   .catch((e) => {
//     console.log('ERROR', e);
//   });

// const loadStarWarsPeople = async () => {
//   try {
//     const res = await fetch('https://www.swapi.tech/api/people/1/');
//     const data = await res.json();
//     console.log(data.result.properties);
//     const res2 = await fetch('https://www.swapi.tech/api/people/2/');
//     const data2 = await res2.json();
//     console.log(data2.result.properties);
//   } catch (e) {
//     console.log('ERROR', e);
//   }
// };

// loadStarWarsPeople();

const loadStarWarsPeopleById = async (id) => {
  try {
    const res = await fetch(`https://www.swapi.tech/api/people/${id}`);
    const data = await res.json();
    let access = data.result.properties;
    console.log(access.name);
  } catch (e) {
    console.error('ERROR', e);
  }
};

loadStarWarsPeopleById(1);
loadStarWarsPeopleById(2);
loadStarWarsPeopleById(3);
