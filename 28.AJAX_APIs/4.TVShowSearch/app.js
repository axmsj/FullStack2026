const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const configParams = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, configParams);
  makeShows(res.data);
  form.elements.query.value = '';
});

const makeShows = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement('img');
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};

const deleteBtn = document.querySelector('#deleteBtn');

const deleteShow = () => {
  const allImages = document.querySelectorAll('img');
  allImages.forEach((e) => e.remove());
};

deleteBtn.addEventListener('click', deleteShow);
