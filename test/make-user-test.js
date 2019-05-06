import makeUser from '../src/home/make-user.js';
const test = QUnit.test;

QUnit.module('make user');
    
test('create user object from form data', (assert) => {
    //arrange
    const formData = new FormData();
    formData.set('character', 'mario');
    formData.set('power-ups', 'fire-ball');
    
    const expected = {
        character: 'mario',
        powerUps: 'fire-ball',
        lives: 2,
        coins: 10
    };
    //act
    const user = makeUser(formData);

    //assert
    assert.deepEqual(user, expected);
});