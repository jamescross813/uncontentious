class Api{
    constructor(basicUrl){
        this.basicUrl = basicUrl;
    }

    fetchGames() {
        fetch(this.basicUrl)
        .then(resp =>resp.json())
        .then(data =>Game.renderGames(data))
      };
    
    // fetchGame(id) {
    //     gameCard.innerHTML = ""
    //     fetch(`${basicUrl}/games/${id}`)
    //     .then(resp =>resp.json())
    //     .then(data =>{
    //         if(data === 'message: "Game not found, please try again or add the game to the records"'){
    //             renderError(data)
    //         }else{
    //             renderGame(data)
    //         }
    //     })
    // };
}