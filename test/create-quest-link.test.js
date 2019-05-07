const test = QUnit.test;

QUnit.module('create quest link');

function createQuestLink(quest) {
    const link = document.createElement('a');
    link.classList.add('tunnel-link');
    const image = document.createElement('img');
    image.setAttribute('src', './assets/tunnel.png');
    link.appendChild(image);

    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);
    link.href = 'quest.html?' + searchParams.toString();

    return link;

}

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
