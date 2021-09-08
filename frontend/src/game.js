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
            this.categories = [];
            this.id = id
            Game.all.push(this)
        }  
    
        static renderGames(data){ 
            return data.map(r => {
                const newGame = new Game(r)
                newGame.renderTitles()
            })
        }
    
        renderTitles(){
            // let id = parseInt(this.id, 10)
            let gameTitle = document.createElement('span')
            gameTitle.innerHTML = `<a href ="${this.gameTitle}">${this.gameTitle}<br>`
            gamesList.append(gameTitle)
            gameTitle.id = `title-${this.id}` 
            title[this.id-1].addEventListener("mouseover", ()=>{
                
            })
        }
        
        static renderGame(data){
            const indGame = new Game(data)
            indGame.renderGameInfo()
        }
    
        getCategories(){
            this.categories.map(c=>
                cat = c)
        }
    
        renderGameInfo(){
            addForm.hidden = true
            
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
            this.categories.map(c=>
                gameCat.innerHTML = `Category: ${this.categories}`)
            editButton.hidden = false
            editButton.name = `${this.id}`
        //    deleteButton = document.createElement('button')
        //    deleteButton.innerHTML = `<type="button" id ="delete-button">Delete Game`
           
            gameCard.append(gameTitle, gameDescription, gamePlayers, gamePlayStyle, gameTime, gameType, gameCat)
        }
    
        static renderEditForm(data){
            editButton.hidden = true
            let editForm = document.createElement('form')
            editForm.innerHTML = `
            <label>Title:</label>
            <input type="text" id="title-input" name="game-title" class="input-text" value=${data.game_title}><br>
            <label>Minimum Players:</label>
            <input type="text" id="player-range-min-input" name="player-range-min" class="input-text" value=${data.min_players}><br>
            <label>Maximum Players:</label>        
            <input type="text" id="player-range-max-input" name="player-range-max" class="input-text" value=${data.max_players}><br>
            <label>Game Type:</label>        
            <input type="text" id="game-type-input" name="game-type" class="input-text" value=${data.game_type}><br>
            <label>Game Style:</label>        
            <input type="text" id="play-style-input" name="play-style" class="input-text" value=${data.play_style}><br>
            <label>Max Play Time:</label>        
            <input type="text" id="play-time-input" name="play-time" value=${data.max_time}><br>
            <label>Category</label>        
            <input type="text" id="category-one" name="game-category-one" value="${data.game_categories}"><br>
            <label>Additional Category:</label>        
            <input type="text" id="category-two" name="game-category-two" value=""><br>
            <label>Description:</label>        
            <input type="text" id="description-input" name="description" class="input-text" value=${data.description}></textarea><br>
                    <button type="button" id="edit-submit">Edit Game</button>`
            gameCard.append(editForm)
        }
    
    }
    