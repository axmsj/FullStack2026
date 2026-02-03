// async function hello() {}

const sing = async () => {
  //   throw new Error('UHH OHH');
  return 'LA LA LA';
};

// sing()
//   .then((data) => {
//     console.log('PROMISES RESOLVED with:', data);
//   })
//   .catch((err) => {
//     console.log('PROMISE REJECTED');
//   });

const login = async (username, password) => {
  if (!username || !password) throw 'Missing Credentials';
  if (password === 'corgifeetarecute') return 'WELCOME';
  throw 'Invalid Password';
};

// login('ashdjfhs', 'corgifeetarecute')
//   .then((msg) => {
//     console.log('LOGGED IN');
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log('ERROR!');
//     console.log(err);
//   });

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

async function rainbow() {
  await delayedColorChange('red', 1000);
  await delayedColorChange('orange', 1000);
  await delayedColorChange('yellow', 1000);
  await delayedColorChange('green', 1000);
  await delayedColorChange('blue', 1000);
  await delayedColorChange('indigo', 1000);
  await delayedColorChange('violet', 1000);
  return 'ALL DONE!';
}

// rainbow().then((msg) => {
//   console.log('END OF RAINBOW', msg);
// });

async function printRainbow() {
  await rainbow();
  console.log('END OF RAINBOW');
}

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 2000) {
        reject('Connection Timeout');
      } else {
        resolve(`Here is your fake data: ${url}`);
      }
    }, delay);
  });
};

async function makeTwoRequest() {
  try {
    let data1 = await fakeRequest('/page1');
    console.log(data1);
    let data2 = await fakeRequest('/page2');
    console.log(data2);
  } catch (e) {
    console.log('CAUGHT AN ERROR');
    console.log('error is:', e);
  }
}
