function scoreCoins(coins) {
    if(coins <= 10) {
        return 'lose';
    }
    return 'win';
}

export default scoreCoins;