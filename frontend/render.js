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
    const gameCard = document.createElement('div');
    document.body.appendChild(gameCard)
    gameCard.elementId = 'game-card';

    data.map(r => {
        let gameTitle = document.createElement('h3')
        gameTitle.innerHTML = r.title
        
        let gameDescription = document.createElement('p')
        gameDescription.innerHTML = r.description

        let gamePlayers = document.createElement('li')
        gamePlayers.innerHTML = `Number of players: ${r.min_players} - ${r.max_players}`

        let gamePlayStyle = document.createElement('li')
        gamePlayStyle.innerHTML = `Play Style: ${r.play_style}`

        let gameTime = document.createElement('li')
        gameTime.innerHTML = `Max Time: ${r.max_time}`

        let gameType = document.createElement('li')
        gameType.innerHTML = `Game Type: ${r.game_type}`

        gameCard.append(gameTitle, gameDescription, gamePlayers, gamePlayStyle, gameTime, gameType)

    })
}
  
document.addEventListener("DOMContentLoaded", function() {
    fetchGames()
    renderGames()
})
