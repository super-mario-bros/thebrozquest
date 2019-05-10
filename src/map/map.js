import api from '../services/api.js';
import loadProfile from '../load-profile.js';
import createQuestLink from './create-quest-link.js';
import isDead from './is-dead.js';
import hasCompletedAllQuests from './has-completed-all-quests.js';

loadProfile();
const quests = api.getQuests();
const user = api.getUser();

if(isDead(user) || hasCompletedAllQuests(quests, user)) {
    window.location = 'end.html';
}

const nav = document.getElementById('tunnels');

for(let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    const link = createQuestLink(quest);
    nav.appendChild(link);
    if(user.completed[quest.id]) {
        link.classList.add('completed');
    }
}