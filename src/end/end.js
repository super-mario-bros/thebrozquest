import loadProfile from '../load-profile.js';

loadProfile();

const user = api.getUser();
const storyDisplay = document.getElementById('win-lose-message');
const winLose = document.getElementById('win-lose');

