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

    renderGames(data){   
        data.map(r => {
            let gameName 
            gameName.innerHTML = `<option value="${r.gameTitle}">${r.gameTitle}</option>`
            
        })
    }
    
    renderGame(data){
        gamesCard.hidden
        gameTitle = document.createElement('a')
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
}