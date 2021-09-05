class Game{
static all = []

    constructor(title, minPlayer, maxPlayer, description, gameStyle, gameType, time, gameCategories){
      
        this.title = title;
        this.minPlayer = minPlayer;
        this.maxPlayer = maxPlayer;
        this.description = description;
        this.gameStyle = gameStyle;
        this.gameType = gameType;
        this.time = time;
        this.categories = gameCategories
        Game.all.push(this)
    }

    fetchGames() {
        fetch(`${basicUrl}/games`)
        .then(resp =>resp.json())
        .then(data =>Game.renderGames(data))
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

    static renderGames(data){ 
        return data.map(r => {
            const newGame = new Game(r)
            newGame.renderGame(r)
        })
    }
    
    renderGame(data){
        console.log(data)
        // console.log(this)
        // let gameTitle = document.createElement('h2')
        // gameTitle.innerHTML = data.gameTitle
     
        // gameCard.hidden = false            
        // let gameDescription = document.createElement('p')
        // gameDescription.innerHTML = data.description
    
        // let gamePlayers = document.createElement('li')
        // gamePlayers.innerHTML = `Number of players: ${data.min_players} - ${data.max_players}`
    
        // let gamePlayStyle = document.createElement('li')
        // gamePlayStyle.innerHTML = `Play Style: ${data.play_style}`
    
        // let gameTime = document.createElement('li')
        // gameTime.innerHTML = `Max Time: ${data.max_time}`
    
        // let gameType = document.createElement('li')
        // gameType.innerHTML = `Game Type: ${data.game_type}`
        gameCard.append(gameTitle)
        // gameCard.append(gameTitle, gameDescription, gamePlayers, gamePlayStyle, gameTime, gameType)
    }

    async newGamePost(){

        let inputValue = document.getElementsByClassName("input-text");
        let titleInput = document.getElementById('title-input');
    
        let gameFormData = {
            description: inputValue[3].value,
            min_players: inputValue[1].value,
            max_players: inputValue[2].value,
            max_time: inputValue[7].value,
            play_style: inputValue[6].value,
            game_type: inputValue[4].value,
            game_title: titleInput.value
            };
    
        let configObj = {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(gameFormData)
        };
    
        fetch(`${basicUrl}/games`, configObj)
        .then(resp => resp.json())
        .then(data => {
            fetchGame(data.id);
            
        })
    
    }
}