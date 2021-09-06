class Game{
static all = []

    constructor({game_title, min_players, max_players, description, play_style, game_type, max_time, game_categories}){
        this.gameTitle = game_title;
        this.minPlayer = min_players;
        this.maxPlayer = max_players;
        this.description = description;
        this.gameStyle = play_style;
        this.gameType = game_type;
        this.time = max_time;
        this.categories = []

        game_categories.map(c=>{
            this.categories.push(c.category_id)
            
        }
            )
        // console.log(game_categories[0].category_id)
        // this.categories.push(game_categories)
        Game.all.push(this)
        
    }  

    static renderGames(data){ 
        return data.map(r => {
            const newGame = new Game(r)
            newGame.renderTitles(r)
        })
    }

    renderTitles(){
        let gameTitle = document.createElement('h2')
        gameTitle.innerHTML = this.gameTitle
        gameCard.append(gameTitle)
        
    }
    
    renderGame(){
        gameCard.hidden = true          
        let gameDescription = document.createElement('p')
        gameDescription.innerHTML = this.description
        console.log(gameDescription)
        let gamePlayers = document.createElement('li')
        gamePlayers.innerHTML = `Number of players: ${this.minPlayer} - ${this.maxPlayer}`
    
        let gamePlayStyle = document.createElement('li')
        gamePlayStyle.innerHTML = `Play Style: ${this.gameStyle}`
    
        let gameTime = document.createElement('li')
        gameTime.innerHTML = `Max Time: ${this.time}`
    
        let gameType = document.createElement('li')
        gameType.innerHTML = `Game Type: ${this.gameType}`
       
        gameCard.append(gameTitle, gameDescription, gamePlayers, gamePlayStyle, gameTime, gameType)
    }

    getCategories(){
        this.categories.map(c=>
            console.log(c))
    }

    // newGamePost(){

    //     let inputValue = document.getElementsByClassName("input-text");
    //     let titleInput = document.getElementById('title-input');
    
    //     let gameFormData = {
    //         description: inputValue[3].value,
    //         min_players: inputValue[1].value,
    //         max_players: inputValue[2].value,
    //         max_time: inputValue[7].value,
    //         play_style: inputValue[6].value,
    //         game_type: inputValue[4].value,
    //         game_title: titleInput.value
    //         };
    
    //     let configObj = {
    //         method: "POST",
    //         headers:{
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(gameFormData)
    //     };
    
    //     fetch(`${basicUrl}/games`, configObj)
    //     .then(resp => resp.json())
    //     .then(data => {
    //         fetchGame(data.id);
            
    //     })
    
    // }
}