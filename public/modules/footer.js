apiURL = (window.location.origin == 'https://gameplanning.site') ?
  'https://api.gameplanning.site' :
  'http://api.gameplanning.local';

document.querySelector('footer').innerHTML = `
  <a href="https://github.com/JacobStephens2/game-planning-front-end">GitHub</a>
  <a href="${apiURL}">API</a>
`;
