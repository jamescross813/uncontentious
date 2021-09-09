class Game{
    static all = []
    
        constructor({game_title, min_players, max_players, description, play_style, game_type, max_time, game_categories, id}){
            this.gameTitle = game_title;
            this.minPlayer = min_players;
            this.maxPlayer = max_players;
            this.description = description;
            this.gameStyle = play_style;
            this.gameType = game_type;
            this.time = max_time;
            this.categories = []
            this.id = id
           
            this.categories.push(game_categories)
            Game.all.push(this)
            
        }  

        static renderGames(data){ 
            return data.map(r => {
                const newGame = new Game(r)
                newGame.renderTitles()
            })
        }

        static renderGame(data){
            const indGame = new Game(data)
            indGame.renderGameInfo()
            
        }
    
        renderTitles(){
            let gameTitle = document.createElement('span')
            gameTitle.innerHTML = `<a href ="${this.gameTitle}">${this.gameTitle}<br>`
            gamesList.append(gameTitle)
            gameTitle.id = `title-${this.id}` 
            title[this.id-1].addEventListener("mouseover", ()=>{

            })
        }
        
        renderGameInfo(){
            console.log("this")
            addForm.hidden = true
            gameSection.hidden = !gameSection.hidden
            gameCard.innerHTML = ""   
            let gameTitle = document.createElement('h2')
            gameTitle.innerHTML = this.gameTitle
    
            let gameDescription = document.createElement('p')
            gameDescription.innerHTML = this.description
    
            let gamePlayers = document.createElement('li')
            gamePlayers.innerHTML = `Number of players: ${this.minPlayer} - ${this.maxPlayer}`
        
            let gamePlayStyle = document.createElement('li')
            gamePlayStyle.innerHTML = `Play Style: ${this.gameStyle}`
        
            let gameTime = document.createElement('li')
            gameTime.innerHTML = `Max Time: ${this.time}`
        
            let gameType = document.createElement('li')
            gameType.innerHTML = `Game Type: ${this.gameType}`
    
            let gameCat = document.createElement('li')
            
            gameCat.innerHTML = `Category: ${this.categories}`
            editButton.hidden = false
            editButton.name = `${this.id}`
        //    deleteButton = document.createElement('button')
        //    deleteButton.innerHTML = `<type="button" id ="delete-button">Delete Game`
           
            gameCard.append(gameTitle, gameDescription, gamePlayers, gamePlayStyle, gameTime, gameType, gameCat)
        }
    
        static renderEditForm(data){
            console.log(data)
            editButton.hidden = true
            gameSection.hidden = !gameSection.hidden
            let editForm = document.createElement('form')
            editForm.innerHTML = `
            <label>Title:</label>
            <input type="text" id="title-input" name="game-title" class="input-text-edit" value="${data.game_title}"><br>
            <label>Minimum Players:</label>
            <input type="text" id="player-range-min-input" name="player-range-min" class="input-text-edit" value="${data.min_players}"><br>
            <label>Maximum Players:</label>        
            <input type="text" id="player-range-max-input" name="player-range-max" class="input-text-edit" value="${data.max_players}"><br>
            <label>Game Type:</label>        
            <input type="text" id="game-type-input" name="game-type" class="input-text-edit" value="${data.game_type}"><br>
            <label>Game Style:</label>        
            <input type="text" id="play-style-input" name="play-style" class="input-text-edit" value="${data.play_style}"><br>
            <label>Max Play Time:</label>        
            <input type="text" id="play-time-input" name="play-time" class="input-text-edit" value="${data.max_time}"><br>
            <label>Category</label>        
            <input type="text" id="category-one" class="input-text-edit" name="game-category-one" value="${data.game_categories}"><br>
            <label>Additional Category:</label>        
            <input type="text" id="category-two" class="input-text-edit" name="game-category-two" value=""><br>
            <label>Description:</label>        
            <input type="text" id="description-input" name="description" class="input-text-edit" value="${data.description}"></textarea><br>
                    <button type="button" id="edit-submit">Edit Game</button>`
            gameCard.append(editForm)

            const editSubmit = document.getElementById('edit-submit')
            editSubmit.addEventListener('click', ()=>{
                console.log("working this far")
         let currentGameApi = new Api(`${basicUrl}/games/${data.id}`)
          currentGameApi.editGamePatch()
      })
        }
    
    }
    