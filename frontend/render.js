const basicUrl= "http://localhost:3000/"
const gameList = document.getElementById('game-list');
const searchForm = document.getElementById("search-games");
const addForm = document.getElementById("add-game-form");

function fetchGames() {
    fetch(`${basicUrl}/games`)
    .then(resp =>resp.json())
    .then(data =>renderGames(data))
  };

function renderGames(data){
    const game_card = document.createElement('div');
    document.body.appendChild(game_card)
    game_card.elementId = 'game-card';

    data.map(r => {
        let gameTitle = document.createElement('h3')
        gameTitle.innerHTML = r.title
        game_card.append(gameTitle)
    })
}
  
document.addEventListener("DOMContentLoaded", function() {
    fetchGames()
    renderGames()
})
