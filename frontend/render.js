const basicUrl= "http://localhost:3000"
const gameList = document.getElementById('game-list');
const searchForm = document.getElementById("search-games");
const addForm = document.getElementById("add-game-form");
const gamesCard = document.getElementById('game-card');

const gameCard = document.getElementById('game-card');

function renderGames(data){   
    data.map(r => {
        let gameTitle = document.createElement('h3')
        gameTitle.innerHTML = titleCase(r.game_title)
        gameTitle.className = "title"
        gamesCard.append(gameTitle)
    })
}

function renderGame(data){
    gamesCard.hidden
    gameTitle = document.createElement('h3')
    gameTitle.innerHTML = data.game_title
    gameTitle.id = "titles"
    gameCard.hidden = false            
    let gameDescription = document.createElement('p')
    gameDescription.innerHTML = data.description

    let gamePlayers = document.createElement('li')
    gamePlayers.innerHTML = `Number of players: ${data.min_players} - ${data.max_players}`

    let gamePlayStyle = document.createElement('li')
    gamePlayStyle.innerHTML = `Play Style: ${data.play_style}`

    let gameTime = document.createElement('li')
    gameTime.innerHTML = `Max Time: ${data.max_time}`

    let gameType = document.createElement('li')
    gameType.innerHTML = `Game Type: ${data.game_type}`

    gameCard.append(gameTitle, gameDescription, gamePlayers, gamePlayStyle, gameTime, gameType)
}

function searchGames(data, input){
    let typeOfGame = ["card", "dice", "board"]
        console.log("you're looking for a type of game")
    if (typeOfGame.includes(input)){
        
    }
}

function titleCase(title){
        let words = title.split(" ")
        let newWords = words.map(word => word[0].toUpperCase() + word.substring(1))
        let upCaseWords = newWords.join(" ")
          return upCaseWords
}

function renderError(data){
    let error = createElement('h2')
    error.innerHTML = data.value
}

 
document.addEventListener("DOMContentLoaded", function() {
    // fetchGames()
    
    
})
