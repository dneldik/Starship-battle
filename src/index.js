import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Video game: ', 'Starship battle'], ' ');

  return element;
}

document.body.appendChild(component());
