
document.addEventListener("DOMContentLoaded", function() {
    const gameApi = new Api(`${basicUrl}/games`)

    addFormButton.addEventListener('click', function () {
        if(!gamesList.hidden){
            gamesList.hidden = !gamesList.hidden
        }
        addForm.hidden = !addForm.hidden       
    })

    viewButton.addEventListener('click', () =>{
        if(!gameCard.hidden || !addForm.hidden){
            gameCard.hidden = true
            addForm.hidden = true
        }
        gamesList.hidden = !gamesList.hidden
        gameApi.fetchGames()   
    })  

    addSubmit.addEventListener('click', function(){   
       gameApi.newGamePost()
       gameSection.hidden = !gameSection.hidden
       addForm.reset() 
    }) 

    editButton.addEventListener('click', () =>{
       let game_id = editButton.name
       let currentGameApi = new Api(`${basicUrl}/games/${game_id}`)
        currentGameApi.fetchEditGame()

       

        
    })

    

    randomButton.addEventListener('click', () =>{

        if(!gamesList.hidden || !addForm.hidden){
            gamesList.hidden = true
            addForm.hidden = true
            }  

            let num = Math.floor(Math.random()*10)
            currentGameApi = new Api(`${basicUrl}/games/${num}`)
            currentGameApi.fetchGame()
            
    })
    
   

}); 
 