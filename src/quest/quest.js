import api from '../services/api.js';
import createChoice from '../quest/create-choice.js';
import loadProfile from '../load-profile.js';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = api.getQuest(questId);

// if(!quest) {
//     window.location = 'map.html';
// }

const world = document.getElementById('world');
const image = document.getElementById('world-image');
const description = document.getElementById('description');
const choices = document.getElementById('potential-responses');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');


world.textContent = quest.title;
image.src = '../../assets/' + quest.image;
description.textContent = quest.description; 

for(let index = 0; index < quest.choices.length;index++) {
    const choice = quest.choices[index];
    const options = createChoice(choice);
    choices.appendChild(options);
    console.log(choice);
}

