function letsPlay(quarters) {

    var game;
    var youWon = 0;;

    while(quarters > 0) {

    game = Math.floor(Math.random() * 100);

    if(game === 28) {

        youWon = Math.floor(Math.random() * 51) + 50;

        return youWon + quarters;

       }
    quarters--;
    }

    return 0;
}
console.log(letsPlay(150));