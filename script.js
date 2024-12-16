const form = document.querySelector('.form');
console.log(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const formEntries = Object.fromEntries(formData);
  console.log(formEntries);
  form.reset();
});

const hobbyForm = document.querySelector('.hobbies-form');

hobbyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(hobbyForm);
  const formEntries = Object.fromEntries(formData);
  console.log(formEntries);

  const name = document.createElement('p');
  name.textContent = formData.get('first-name');

  const location = document.createElement('p');
  location.textContent = formData.get('location');

  const favouriteHobby = document.createElement('p');
  favouriteHobby.textContent = formData.get('favourite-hobby');

  const favouriteBand = document.createElement('p');
  favouriteBand.textContent = `${
    formData.get('band') === 'Spice Girls'
      ? 'Really the Spice Girls'
      : formData.get('band')
  }`;

  const details = document.querySelector('.hobby-details');
  details.innerHTML = '';
  details.appendChild(name);
  details.appendChild(location);
  details.appendChild(favouriteHobby);
  details.appendChild(favouriteBand);

  hobbyForm.reset();
});
