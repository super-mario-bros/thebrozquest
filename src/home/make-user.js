function makeUser(formData){
    const user = {
        character: formData.get('character'),
        powerUps: formData.get('power-ups'),
        lives: 2,
        coins: 10
    };
    return user;
}
export default makeUser;