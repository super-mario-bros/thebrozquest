import scoreCoins from '../src/end/score-coins.js';

const test = QUnit.test;

QUnit.module('score coins');

test('lose', function(assert) {
    const user = { coins: 10 };
    const score = scoreCoins(user.coins);
    assert.equal(score, 'lose');
});

test('win', function(assert) {
    const user = { coins: 30 };
    const score = scoreCoins(user.coins);
    assert.equal(score, 'win');
});