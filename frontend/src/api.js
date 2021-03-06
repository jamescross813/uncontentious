class Api{
    constructor(basicUrl){
        this.basicUrl = basicUrl;
    }

  async fetchGames() {
      gamesList.innerHTML = ""
        fetch(this.basicUrl)
        .then(resp =>resp.json())
        .then(data =>Game.renderGames(data))
        .catch(()=>{
            alert("Server is taking a nap, please try back later!")
        })
  };
    
  async fetchGame() {
      fetch(this.basicUrl)
      .then(resp =>resp.json())
      .then(data =>{
        if (data.hasOwnProperty('message')){
          randomizer()
        }else{
          Game.renderGame(data)
        }
      })
      .catch(()=>{
        alert("Server is taking a nap, please try back later!")
      })
  };

  async fetchEditGame() {
      fetch(this.basicUrl)
      .then(resp =>resp.json())
      .then(data =>Game.renderEditForm(data))
      .catch(()=>{
        alert("Server is taking a nap, please try back later!")
      })
  };

  async fetchNote() {
      fetch(this.basicUrl)
      .then(resp =>resp.json())
      .then(data =>Note.renderNote(data))
      .catch(()=>{
        alert("Server is taking a nap, please try back later!")
      })
    };

  async newGamePost(){
      let inputValue = document.getElementsByClassName("input-text");
      let titleInput = document.getElementById('title-input');
      
      let gameFormData = {
          game_categories: `${inputValue[6].value}, ${inputValue[7].value}`,
          description: inputValue[8].value,
          min_players: inputValue[1].value,
          max_players: inputValue[2].value,
          max_time: inputValue[5].value,
          play_style: inputValue[4].value,
          game_type: inputValue[3].value,
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
      .then(data => Game.renderGame(data))
      .catch(()=>{
        alert("Server is taking a nap, please try back later!")
      })
  }

  async editGamePatch(){
      event.preventDefault()
      let editInputValue = document.getElementsByClassName("input-text");
    
      let gameFormData = {
          game_categories: `${editInputValue[6].value}, ${editInputValue[7].value}`,
          description: editInputValue[8].value,
          min_players: editInputValue[1].value,
          max_players: editInputValue[2].value,
          max_time: editInputValue[5].value,
          play_style: editInputValue[4].value,
          game_type: editInputValue[3].value,
          game_title: editInputValue[0].value
         };
            
      let configObj = {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify(gameFormData)
      };
    
      fetch(`${this.basicUrl}`, configObj)
      .then(resp => resp.json())
      .then(data => Game.renderGame(data))
      .catch(()=>{
        alert("Server is taking a nap, please try back later!")
      })
  }

  async newUserPost(){
      let usernameInput = document.getElementById("username-input");
            
      let userFormData = {
        username: usernameInput.value
      };
            
      let configObj = {
          method: "POST",
          headers:{
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify(userFormData)
      };
    
      fetch(`${this.basicUrl}`, configObj)
      .then(resp => resp.json())
      .then(data => User.renderIntro(data))
      .catch(()=>{
        alert("Server is taking a nap, please try back later!")
      })
   }

  async newNotePost(){ 
      let inputValue = document.getElementsByClassName("input-text");
      let gameId = gameCard.className  
    
      let noteFormData = {
          username: inputValue[0].value,
          game_id: gameId,
          content: inputValue[1].value
          };
            
      let configObj = {
          method: "POST",
          headers:{
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify(noteFormData)
      };
    
      fetch(`${this.basicUrl}`, configObj)
      .then(resp => resp.json())
      .then(data => Note.renderNote(data))
      .catch(()=>{
        alert("Server is taking a nap, please try back later!")
      })
  }
}