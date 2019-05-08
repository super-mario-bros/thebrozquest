import api from '../src/services/api.js';
import scoreQuest from '../src/quest/score-quest.js';

const test = QUnit.test;
QUnit.module('api');
api.storage = sessionStorage;

test('test to return updated user profile', (assert) => {
    //arrange
    const character = { 
        lives: 2,
        coins: 10
    };

    const characterChoice = {
        lives: 1,
        coins: 5
    }; 

    //act
    const newUser = scoreQuest(characterChoice, character);
    const result = { 
        lives: 3,
        coins: 15
    };

    //assert
    assert.deepEqual(newUser, result);
});

