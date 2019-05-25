import hasCompletedAllQuests from '../src/map/has-completed-all-quests.js';
const test = QUnit.test;
QUnit.module('has completed all quests');

const quests = [
    { id: 'one' },
    { id: 'two' },
    { id: 'three' },
];

test('returns true has completed all quests', function(assert) {
    const user = {
        completed: {
            one: true, 
            two: true,
            three: true
        }
    };

    const hasCompleted = hasCompletedAllQuests(quests, user);
    assert.equal(hasCompleted, true);
});

test('returns false not all quests completed', function(assert) {
    const user = {
        completed: {
            one: true, 
            three: true
        }
    };

    const hasCompleted = hasCompletedAllQuests(quests, user);
    assert.equal(hasCompleted, false);
});
