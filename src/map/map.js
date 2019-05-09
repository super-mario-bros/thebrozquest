import api from '../services/api.js';
import loadProfile from '../load-profile.js';
import createQuestLink from './create-quest-link.js';
//import scoreQuest from '../quest/score-quest.js';


loadProfile();
const quests = api.getQuests();
const user = api.getUser();
const nav = document.getElementById('tunnels');

for(let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    const link = createQuestLink(quest);
    nav.appendChild(link);
    //let dom; 
    if(user.completed[quest.id]) {
        link.classList.add('completed');
    }
}