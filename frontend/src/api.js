class Api{
    constructor(basicUrl){
        this.basicUrl = basicUrl;
    }

    fetchGames() {
        fetch(this.basicUrl)
        .then(resp =>resp.json())
        .then(data =>Game.renderGames(data))
      };
    
    fetchGame(id) {
        gameCard.innerHTML = ""
        fetch(`${basicUrl}/games/${id}`)
        .then(resp =>resp.json())
        .then(data =>Game.renderGame(data))
    };

    fetchCategory(id) {
        fetch(`${basicUrl}/categories/${id}`)
        .then(resp =>resp.json())
        .then(data =>Category.renderCategory(data))
      }
}