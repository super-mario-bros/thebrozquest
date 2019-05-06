const api = {
    //use by testing to control where api saves data
    storage: localStorage,
    //methods for reading and saving data
    signUp(user) {
        const json = JSON.stringify(user);
        api.storage.setItem('user', json);
    },
    getUser() {
        const json = api.storage.getItem('user');
        if(!json) return null;
        const user = JSON.parse(json);
        return user;
    }
};

export default api;