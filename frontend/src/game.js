class Game{
       
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

        static renderNewForm(data){
            const gameToCreate = new Game(data)
            gameToCreate.addNewForm()
        }

        renderTitles(){
            let gameTitle = document.createElement('span')
            gameTitle.innerHTML = `<a href ="${this.gameTitle}">${this.gameTitle}</a><br>`
            gamesList.append(gameTitle)
            gameTitle.id = `title-${this.id}` 
           
            let titleEvent = ()=>{
                title[this.id-1].addEventListener("click", ()=>{
                event.preventDefault()
                floatGameCard.hidden = false
               this.renderGameInfo()
            })
        }
            titleEvent()
        }
        
        renderGameInfo(){     
            gameCard.className = this.id       
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

            editButton = document.createElement('button')
            editButton.innerHTML = `<type="button" id="edit-game">Edit`
            
            if(this.notes){
                Note.gameNoteSort(this.notes)
            }
            
            if(gamesList.hidden === true){
                let normalGameRender = ()=>{
                    gameCard.innerHTML = "" 
                    gameCard.name = this.id
                    floatGameCard.hidden = true
                    editButton.name = `${this.id}`
                   
                    gameCard.append(gameTitle, gameDescription, gamePlayers, gamePlayStyle, gameTime, gameType, gameCat, noteButton, editButton)
        
                   let noteFormRender = ()=>{ 
                       noteButton.addEventListener('click', ()=>{
                        Note.renderNoteForm()
                    })
                }
                    let editFormRender = ()=>{
                        editButton.addEventListener('click', ()=>{
                            let game_id = editButton.name
                            addForm.hidden = false
                            gameCard.hidden = true
                            let currentGameApi = new Api(`${basicUrl}/games/${game_id}`)
                             currentGameApi.fetchEditGame()
                         })
                    }
                noteFormRender()
                editFormRender()
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

        addNewForm(){
            let newThing = "new"
            this.formRender(newThing)

            const addSubmit = document.getElementById("new-submit")
            
            let addFormEvent = ()=>{
                addSubmit.addEventListener('click', ()=>{   
                let gameApi = new Api(`${basicUrl}/games`)
                gameApi.newGamePost()
                gameSection.hidden = false
                gameCard.hidden = false
                gameForm.reset()
                gameForm.remove()
             }) 
            }
            addFormEvent()
        }

        editForm(){
            editButton.hidden = true;
           
            let thing = 'edit';
            this.formRender(thing);

            let editSubmit = document.getElementById('edit-submit');

            let editEvent = ()=>{
                editSubmit.addEventListener('click', ()=>{
                let currentGameApi = new Api(`${basicUrl}/games/${this.id}`)
                currentGameApi.editGamePatch()
                gameSection.hidden = false
                gameCard.hidden = false
                gameForm.reset()
                gameForm.remove()
                })
            }
            editEvent()
        }

        formRender(thing){
            gameForm = document.createElement('form')
            gameForm.id = "game-form"
            if(thing === "new"){
                this.gameTitle = "";
                this.minPlayer = "";
                this.maxPlayer = "";
                this.description = "";
                this.gameStyle = "";
                this.gameType = "";
                this.time = "";
                this.categories = []
                this.id = ""
                this.notes = ""
            }
            
            gameForm.innerHTML = `
            <label>Title:</label><br>
                <input type="text" id="title-input" name="game-title" class="input-text" value="${this.gameTitle}"><br>
            <label>Minimum Players:</label><br>
                <input type="text" id="player-range-min-input" name="player-range-min" class="input-text" value="${this.minPlayer}"><br>
            <label>Maximum Players:</label><br>    
                <input type="text" id="player-range-max-input" name="player-range-max" class="input-text" value="${this.maxPlayer}"><br>
            <label>Game Type:</label><br>        
                <input type="text" id="game-type-input" name="game-type" class="input-text" value="${this.gameType}"><br>
            <label>Game Style:</label><br>        
                <input type="text" id="play-style-input" name="play-style" class="input-text" value="${this.gameStyle}"><br>
            <label>Max Play Time:</label><br>       
                <input type="text" id="play-time-input" name="play-time" class="input-text" value="${this.time}"><br>
            <label>Category</label><br>        
                <input type="text" id="category-one" class="input-text" name="game-category-one" value="${this.categories}"><br>
            <label>Additional Category:</label><br>        
                <input type="text" id="category-two" class="input-text" name="game-category-two" value=""><br>
            <label>Description:</label><br>        
                <input type="text" id="description-input" name="description" class="input-text" value="${this.description}"></textarea><br>
                    <button type="button" id="${thing}-submit">${thing}</button>`

            return addForm.append(gameForm)
        }


    }
    