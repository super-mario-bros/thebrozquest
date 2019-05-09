import scoreLives from '../src/end/score-lives.js';

const test = QUnit.test;

QUnit.module('score lives');

test('live', function(assert) {
    const user = { lives: 1 };
    const score = scoreLives(user.lives);
    assert.equal(score, 'alive');
});

test('die', function(assert) {
    const user = { lives: 0 };
    const score = scoreLives(user.lives);
    assert.equal(score, 'dead');
});
