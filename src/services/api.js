import questData from './quest-data.js';

const api = {
    //use by testing to control where api saves data
    storage: localStorage,
    //methods for reading and saving data
    saveUser(user) {
        const json = JSON.stringify(user);
        api.storage.setItem('user', json);
    },
    getUser() {
        const json = api.storage.getItem('user');
        if(!json) return null;
        const user = JSON.parse(json);
        return user;
    },
    getQuests() {
        return questData;
    }, 
    // getQuest(id) {
    //     const quests = api.getQuests();
    //     for(let i = 0; i < quests.length; i++) {
    //         const questId = quests[i].id;
    //         if(questId === id) {
    //             return quests[i];
    //         }
    //     }
    // }
};

export default api;