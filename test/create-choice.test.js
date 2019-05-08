import questData from '../src/services/quest-data.js';
import api from '../src/services/api.js';
const test = QUnit.test;

QUnit.module('api');
api.storage = sessionStorage;
QUnit.testStart(() => {
    sessionStorage.clear();
});

test('take a quest choice object and return created DOM element for that choice', (assert) => {
    //arrane
    const choice = {
        
        id: 'fight',
        description: 'Engage in battle.',
    }

    //act
    
    const result = <input type="radio" name="choice" value="choice1">Engage in battle
        
        
    
    //assert
    assert.deepEqual(result, user);
});