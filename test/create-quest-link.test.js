import createQuestLink from '../src/map/create-quest-link.js';
const test = QUnit.test;

QUnit.module('create quest link');

test('create correct html', (assert) => {
    //arrange
    const quest = {
        id: 'cloudWorld',
        title: 'Cloud World',
        image: 'tunnel.png'
    };

    const expected = '<a class="tunnel-link" href="quest.html?id=cloudWorld"><img src="./assets/tunnel.png"></a>';
    
    // act
    const dom = createQuestLink(quest);

    // assert
    assert.equal(dom.outerHTML, expected);
});
