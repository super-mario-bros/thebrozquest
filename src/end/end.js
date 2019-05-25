import loadProfile from '../load-profile.js';
import api from '../services/api.js';
import scoreLives from '../end/score-lives.js';
import scoreCoins from '../end/score-coins.js';
import resultMessages from './result-messages.js';

loadProfile();

const user = api.getUser();
const winLose = document.getElementById('win-lose');

const coinResult = scoreCoins(user.coins);
const livesResult = scoreLives(user.lives);

let messages;
if(livesResult === 'alive' && coinResult === 'win') {
    messages = resultMessages['alive'];
}
else if(livesResult === 'alive') {
    messages = resultMessages['broke'];
}
else { 
    messages = resultMessages['dead'];
}

winLose.textContent = messages;