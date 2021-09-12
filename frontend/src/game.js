class Game{
    static all = []
    
        constructor({game_title, min_players, max_players, description, play_style, game_type, max_time, game_categories, id, notes}){
            this.gameTitle = game_title;
            this.minPlayer = min_players;
            this.maxPlayer = max_players;
            this.description = description;
            this.gameStyle = play_style;
            this.gameType = game_type;
            this.time = max_time;
            this.categories = []
            this.id = id
            this.notes = notes
           
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

        static renderEditForm(data){
            const gameToEdit = new Game(data)
            gameToEdit.editForm()
        }
    
        renderTitles(){
            let gameTitle = document.createElement('span')
            gameTitle.innerHTML = `<a href ="${this.gameTitle}">${this.gameTitle}</a><br>`
            gamesList.append(gameTitle)
            gameTitle.id = `title-${this.id}` 
           
            let titleEvent = ()=>{
                title[this.id-1].addEventListener("click", ()=>{
                event.preventDefault()
               this.renderGameInfo()
            })
        }
            titleEvent()
        }
        
        renderGameInfo(){            
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

            let noteButton = document.createElement('button')
            noteButton.innerHTML = `<type="button" id='add-note'>Add Note`
            
            if(this.notes){
            Note.gameNoteSort(this.notes)
            }
            
            if(gamesList.hidden === true){
                let normalGameRender = ()=>{
                    if (gameSection.hidden){
                        gameSection.hidden = !gameSection.hidden
                    }
                    addForm.hidden = true
                    
                    gameCard.innerHTML = "" 
                    gameCard.id = this.id
                    floatGameCard.hidden = true
                    editButton.hidden = false
                    editButton.name = `${this.id}`
                   
                    gameCard.append(gameTitle, gameDescription, gamePlayers, gamePlayStyle, gameTime, gameType, gameCat, noteButton)
        
                   let noteFormRender = ()=>{ 
                       noteButton.addEventListener('click', ()=>{
                        Note.renderNoteForm()
                    })
                }
                noteFormRender()
                }
                normalGameRender() 
            }else{
                let renderGameFlash = ()=>{
                    floatGameCard.innerHTML = ""
                    floatGameCard.append(gameDescription, gamePlayers, gamePlayStyle, gameTime, gameType, gameCat)
                }
                renderGameFlash()
            }
        }

  
        editForm(){
            editButton.hidden = true
            gameSection.hidden = false
// console.log(this.gameTitle)
            let editForm = document.createElement('form')
            editForm.innerHTML = `
            <label>Title:</label>
            <input type="text" id="title-input" name="game-title" class="input-text-edit" value="${this.gameTitle}"><br>
            <label>Minimum Players:</label>
            <input type="text" id="player-range-min-input" name="player-range-min" class="input-text-edit" value="${this.minPlayer}"><br>
            <label>Maximum Players:</label>        
            <input type="text" id="player-range-max-input" name="player-range-max" class="input-text-edit" value="${this.maxPlayer}"><br>
            <label>Game Type:</label>        
            <input type="text" id="game-type-input" name="game-type" class="input-text-edit" value="${this.gameType}"><br>
            <label>Game Style:</label>        
            <input type="text" id="play-style-input" name="play-style" class="input-text-edit" value="${this.gameStyle}"><br>
            <label>Max Play Time:</label>        
            <input type="text" id="play-time-input" name="play-time" class="input-text-edit" value="${this.time}"><br>
            <label>Category</label>        
            <input type="text" id="category-one" class="input-text-edit" name="game-category-one" value="${this.categories}"><br>
            <label>Additional Category:</label>        
            <input type="text" id="category-two" class="input-text-edit" name="game-category-two" value=""><br>
            <label>Description:</label>        
            <input type="text" id="description-input" name="description" class="input-text-edit" value="${this.description}"></textarea><br>
                    <button type="button" id="edit-submit">Edit Game</button>`

            gameCard.append(editForm)

            let editSubmit = document.getElementById('edit-submit')

            let editEvent = ()=>{
                editSubmit.addEventListener('click', ()=>{
                let currentGameApi = new Api(`${basicUrl}/games/${this.id}`)
                currentGameApi.editGamePatch()
                })
            }
            editEvent()

        }
    
    }
    