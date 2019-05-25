import isDead from '../src/map/is-dead.js';
const test = QUnit.test;
QUnit.module('user is dead');

test('true', function(assert) {
    const user = {
        lives: 0
    };

    const dead = isDead(user);

    assert.equal(dead, true);
});

test('false', function(assert) {
    const user = {
        lives: 1
    };

    const dead = isDead(user);

    assert.equal(dead, false);
});