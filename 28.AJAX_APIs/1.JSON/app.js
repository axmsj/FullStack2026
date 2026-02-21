const data = `{"ticker":{
      "base":"BTC",
      "target":"USD",
      "price":11288.49813464,
      "volume":9176.69699733,
      "change":-46.29462447,
      "timestamp":1596510482,
      "success":true,
      "error":""
   }
}`;

// async function getData() {
//   try {
//     const response = await fetch('https://swapi.dev/api/people/1');
//     if (response.ok) {
//       const data = await response.json();
//       console.log(`Person details: ${data.name}, was born in ${data.birth_year}, he is a ${data.gender}.`);
//     } else {
//       throw new Error('FAILED TO FETCH DATA');
//     }
//   } catch (e) {
//     console.error('ERROR', e);
//   }
// }

async function getData() {
  try {
    const response = await fetch('https://swapi.dev/api/people/1');
    if (response.ok) {
      const data = await response.json();
      console.log(`Name: ${data.name} and his gender is ${data.gender}`);
    }
  } catch (e) {
    console.error('ERROR:', e);
  }
}

async function getCatFact() {
  try {
    const response = await fetch('https://catfact.ninja/fact');
    if (response.ok) {
      const catFactObj = await response.json();
      console.log(response);
      console.log(catFactObj);
      console.log(catFactObj.fact);
    } else {
      throw new Error('FAILED TO FETCH DATA');
    }
  } catch (e) {
    console.error('ERROR', e);
  }
}
