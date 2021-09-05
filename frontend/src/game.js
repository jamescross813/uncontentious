class Game{
static all = []

    constructor({game_title, min_players, max_players, description, play_style, game_type, max_time, gameCategories}){
        this.gameTitle = game_title;
        this.minPlayer = min_players;
        this.maxPlayer = max_players;
        this.description = description;
        this.gameStyle = play_style;
        this.gameType = game_type;
        this.time = max_time;
        this.categories = gameCategories
        Game.all.push(this)
        
    }  

    static renderGames(data){ 
        return data.map(r => {
            const newGame = new Game(r)
            // console.log(r)
            newGame.renderTitles(r)
        })
    }

    renderTitles(){
        let gameTitle = document.createElement('h2')
        gameTitle.innerHTML = this.gameTitle
        gameCard.append(gameTitle)
        console.log(gameTitle)
    }
    
    renderGame(){
        // console.log(this.description)
        // console.log(this)
        
     
        // gameCard.hidden = false            
        // let gameDescription = document.createElement('p')
        // gameDescription.innerHTML = this.description
        // console.log(gameDescription)
        // let gamePlayers = document.createElement('li')
        // gamePlayers.innerHTML = `Number of players: ${data.min_players} - ${data.max_players}`
    
        // let gamePlayStyle = document.createElement('li')
        // gamePlayStyle.innerHTML = `Play Style: ${data.play_style}`
    
        // let gameTime = document.createElement('li')
        // gameTime.innerHTML = `Max Time: ${data.max_time}`
    
        // let gameType = document.createElement('li')
        // gameType.innerHTML = `Game Type: ${data.game_type}`
       
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