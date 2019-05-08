import questData from '../src/services/quest-data.js';
import api from '../src/services/api.js';
const test = QUnit.test;

QUnit.module('api');
api.storage = sessionStorage;
QUnit.testStart(() => {
    sessionStorage.clear();
});

function createChoice(choice){
    const label = document.createElement('label');
    const input = document.createElement('input');
    
    input.type = 'radio';
    input.name = 'choice';
    input.required = true;
    input.value = choice.id;
    
    label.textContent = choice.description;
    label.appendChild(input);
    
    return label;
}

test('take a quest choice object and return created DOM element for that choice', (assert) => {
    //arrange
    const choice = {
        
        id: 'fight',
        description: 'Engage in battle.',
    };

    //act
    const expected = '<label>Engage in battle.<input type="radio" name="choice" required="" value="fight"></label>';
    const dom = createChoice(choice);
    //assert
    assert.deepEqual(dom.outerHTML, expected);
});