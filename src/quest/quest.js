import api from '../services/api.js';
import createChoice from '../quest/create-choice.js';
import loadProfile from '../load-profile.js';
import scoreQuest from './score-quest.js';

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
const choiceForm = document.getElementById('choice-form');


world.textContent = quest.title;
image.src = '../../assets/' + quest.image;
description.textContent = quest.description; 

for(let index = 0; index < quest.choices.length;index++) {
    const choice = quest.choices[index];
    const options = createChoice(choice);
    choices.appendChild(options);
}

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    //get user choice
    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    
    for(let i = 0; i < quest.choices.length; i++){
        const choice = quest.choices[i];
        if(choice.id === choiceId){
            resultDescription.textContent = choice.result;
            const user = api.getUser();
            const updatedUser = scoreQuest(choice, user, quest);
            api.saveUser(updatedUser);
            loadProfile();
            
        }
    }


    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    // resultDescription.textContent = choice.result;

});