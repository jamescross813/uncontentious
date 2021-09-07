class Api{
    constructor(basicUrl){
        this.basicUrl = basicUrl;
    }

    fetchGames() {
      gamesList.innerHTML = ""
        fetch(this.basicUrl)
        .then(resp =>resp.json())
        .then(data =>Game.renderGames(data))
      };
    
    fetchGame(id) {
        // gameCard.innerHTML = ""
        fetch(`${this.basicUrl}/${id}`)
        .then(resp =>resp.json())
        .then(data =>Game.renderGame(data))
    };

      newGamePost(){
       console.log("doing stuff in here")
        let inputValue = document.getElementsByClassName("input-text");
        let titleInput = document.getElementById('title-input');
    
        let gameFormData = {
            description: inputValue[8].value,
            min_players: inputValue[1].value,
            max_players: inputValue[2].value,
            max_time: inputValue[5].value,
            play_style: inputValue[4].value,
            game_type: inputValue[3].value,
            game_title: titleInput.value,
            game_categories: [inputValue[6].value, inputValue[7].value]
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
            Game.renderGame(data);
            
        })
      }
      
}