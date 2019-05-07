import api from '../services/api.js';

function loadProfile() {
    //refernce needed Dom elements
    const character = document.getElementById('character');
    const powerUps = document.getElementById('power-ups');
    const lives = document.getElementById('lives');
    const coins = document.getElementById('coins');
    const avatar = document.getElementById('avatar');
    
    //initialize profile with user
    const user = api.getUser();
    
    //no user? go back to sign up
    if(!user) {
        window.location = './';
    }
    
    //populate the profile
    character.textContent = user.character;
    avatar.src = '../assets/avatars/' + user.character + 'Small.png';
    powerUps.textContent = user.powerUps;
    lives.textContent = user.lives;
    coins.textContent = user.coins;
}
    
export default loadProfile;