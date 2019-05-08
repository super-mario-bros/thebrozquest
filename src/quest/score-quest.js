function scoreQuest(choice, user, quest){
    user.lives = user.lives + choice.lives;
    user.coins = choice.coins + user.coins;
    user.completed[quest.id] = true;
    return user;
}

export default scoreQuest;