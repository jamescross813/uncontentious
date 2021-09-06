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
        // gameCard.innerHTML = ""
        fetch(`${this.basicUrl}/${id}`)
        .then(resp =>resp.json())
        .then(data =>Game.renderGame(data))
    };

    fetchCategory(id) {
        fetch(`${this.basicUrl}/${id}`)
        .then(resp =>resp.json())
        .then(data =>Category.renderCategory(data))
      }

    fetchCategories() {
        fetch(basicUrl)
        .then(resp =>resp.json())
        .then(data =>console.log(data))
      }
}