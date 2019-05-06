import api from '../src/services/api.js';
const test = QUnit.test;

QUnit.module('api');
    
test('signUp sets user and returns on getUser', (assert) => {
    //arrane
    const user = { character: 'mario' };

    //act
    api.signUp(user);
    const result = api.getUser();
    
    //assert
    assert.deepEqual(result, user);
});