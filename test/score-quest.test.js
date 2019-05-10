import api from '../src/services/api.js';
import scoreQuest from '../src/quest/score-quest.js';

const test = QUnit.test;
QUnit.module('api');
api.storage = sessionStorage;

test('test to return updated user profile', (assert) => {
    //arrange
    const character = { 
        lives: 2,
        coins: 10,
        completed: {}
    };

    const characterChoice = {
        lives: 1,
        coins: 5
    }; 

    const quest = { id: '1' };
    //act
    const newUser = scoreQuest(characterChoice, character, quest);
    const result = {  
        lives: 3,
        coins: 15,
        completed: { '1': true }
    };

    //assert
    assert.deepEqual(newUser, result);
});
