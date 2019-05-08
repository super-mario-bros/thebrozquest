import createChoice from '../src/quest/create-choice.js';
import api from '../src/services/api.js';
const test = QUnit.test;

QUnit.module('api');
api.storage = sessionStorage;
QUnit.testStart(() => {
    sessionStorage.clear();
});

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