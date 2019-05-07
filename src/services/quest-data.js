const cloudWorld = {
    //quest 1 data
    id: 'cloudWorld',
    title: 'Cloud World',
    image: 'tunnel.png',
    description: `As the name suggests, this level is made up entirely 
        out of clouds. The player must make the right life choices to 
        complete the level with a positive outcome and not die. A tribe of 10 
        koopa paratroopas are blocking you from passing. What do you do?  `,

    choices: [{ 
        id: 'fight',
        description: 'Engage in battle.',
        result: `You kill 4 paratroopas and escape with your life.`,
        lives: 0,
        coins: 30
    }, {
        id: 'fly',
        description: 'Attempt to fly in, around, and between troopas.',
        result: `You bob and weeve yourself right through and grab a 
        oneUp for an extra life! Go YOU!`,
        lives: 1,
        coins: 0
    }, {
        id: 'hide',
        description: 'Hide and duck behind an object or cloud until they pass.',
        result: `You attempt to hide behind a cloud but the search party finds you
        and you lose a life.`,
        lives: -1,
        coins: 0
    }]
};

const tunnelWorld = {
    //quest 2 data
    id: 'tunnelWorld',
    title: 'Tunnel World',
    image: 'tunnel.png',
    description: `Down the tunnel you go and you find yourself undergrouhnd.The
    enemies are crawling over the ceilings and the ground is plagued with bottomless
    pits. You come across an injured Shy-Guy in the middle of the path. What do you
    do?`,

    choices: [{ 
        id: 'adopt',
        description: `You love Shy-Guys, so you grab its nub hand and drag him along
        with you for the adventure.`,
        result: `He is an EVIL Shy-Guy and when you are not looking, 
        he steals a bunch of your coins! `,
        lives: -1,
        coins: -20
    }, {
        id: 'abandon',
        description: `You know what these dudes are about. You quickly pass him by and leave
        him to his fate.`,
        result: `You will never know the fate of that miserable beast.`,
        lives: 1,
        coins: 0
    }, {
        id: 'kill',
        description: `Knowing that the Shy Guy clan are murderous, 
        theiving meanies, you don't hesitate to execute him on the spot.`,
        result: `Turns out this Guy has been real busy theiving and has a pocket
        full of coins.`,
        lives: 0,
        coins: 50
    }]
};

const bowsersWorld = {
    //quest 3 data
    id: 'bowsersWorld',
    title: 'Bowsers World',
    image: 'tunnel.png',
    description: `You made it to Bowser's World. Lava is dripping from the cracks.
    The rocks underneath you are moving. Approaching you is a wall full of
    spikes, glowing red!!!! What will you do???!!!`,

    choices: [{ 
        id: 'jump',
        description: 'Jump as high as you can to make it over the wall.',
        result: `You are no match for the wall. You fall on your face and cry
        all the way to the hospital. Some of your coins melt from the heat.`,
        lives: -1,
        coins: -10
    }, {
        id: 'around',
        description: `Go around the wall.`,
        result: `You find a way around the wall and you find a secret 1up.`,
        lives: 1,
        coins: 0
    }, {
        id: 'standStill',
        description: `You're stunned, and decide to stand still.`,
        result: `The wall envelops you and you lose a life, but you do gain some
        coins because, sad.`,
        lives: -1,
        coins: 10
    }]
};

const quests = [cloudWorld, tunnelWorld, bowsersWorld];

export default quests;
