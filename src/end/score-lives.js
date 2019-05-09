function scoreLives(lives) {
    if(lives <= 0) {
        return 'dead';
    }
    return 'alive';
}

export default scoreLives;