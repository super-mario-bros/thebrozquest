function scoreQuest(choice, user){
    user.lives = user.lives + choice.lives;
    user.coins = choice.coins + user.coins;
    return user;
}

export default scoreQuest;