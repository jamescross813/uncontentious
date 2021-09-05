class Game{
static all = []

    constructor(title, minPlayer, maxPlayer, description, gameType, gameStyle, time){
        this.title = title;
        this.minPlayer = minPlayer;
        this.maxPlayer = maxPlayer;
        this.description = description;
        this.gameType = gameType;
        this.gameStyle = gameStyle;
        this.time = time;
        Game.all.push(this)
    }

    fetchGames() {
        fetch(`${basicUrl}/games`)
        .then(resp =>resp.json())
        .then(data =>renderGames(data))
      };
    
    fetchGame(id) {
        gameCard.innerHTML = ""
        fetch(`${basicUrl}/games/${id}`)
        .then(resp =>resp.json())
        .then(data =>{
            if(data === 'message: "Game not found, please try again or add the game to the records"'){
                renderError(data)
            }else{
                renderGame(data)
            }
        })
    };
}