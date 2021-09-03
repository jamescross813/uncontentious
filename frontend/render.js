const basicUrl= "http://localhost:3000"
const gameList = document.getElementById('game-list');
const searchForm = document.getElementById("search-games");
const addForm = document.getElementById("add-game-form");
const gameCard = document.getElementById('game-card')
let gameTitle = document.createElement('h3')

function renderGames(data){   
    data.map(r => {
        console.log(r)
        gameTitle.innerHTML = titleCase(r.game_title)
        gameTitle.className = "title"
        gameCard.append(gameTitle)
    })
}

function renderGame(data){
    gameTitle = document.createElement('h3')
    gameTitle.innerHTML = titleCase(data.game_title)
    gameTitle.id = "titles"
                
    let gameDescription = document.createElement('p')
    gameDescription.innerHTML = data.description

    let gamePlayers = document.createElement('li')
    gamePlayers.innerHTML = `Number of players: ${data.min_players} - ${data.max_players}`

    let gamePlayStyle = document.createElement('li')
    gamePlayStyle.innerHTML = `Play Style: ${titleCase(data.play_style)}`

    let gameTime = document.createElement('li')
    gameTime.innerHTML = `Max Time: ${data.max_time}`

    let gameType = document.createElement('li')
    gameType.innerHTML = `Game Type: ${titleCase(data.game_type)}`

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

 
document.addEventListener("DOMContentLoaded", function() {
    // fetchGames()
    
    
})
