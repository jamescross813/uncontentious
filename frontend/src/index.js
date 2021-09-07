
document.addEventListener("DOMContentLoaded", function() {
    const gameApi = new Api(`${basicUrl}/games`)
    // const gameSpecificApi = new Api(`${basicUrl}/games/${id}`)
    // searchFormButton.addEventListener('click', ()=> {
    //     if(!addForm.hidden){
    //         addForm.hidden = !addForm.hidden 
    //        console.log("done")
    //     } 
    //     searchForm.hidden = !searchForm.hidden
    // });

    addFormButton.addEventListener('click', function () {
        // if(!searchForm.hidden){
        //     searchForm.hidden = !searchForm.hidden 
        // } 
        if(!gamesList.hidden){
            gamesList.hidden = !gamesList.hidden
        }
        addForm.hidden = !addForm.hidden       
    })

    viewButton.addEventListener('click', () =>{
        if(!gameCard.hidden || !addForm.hidden){
            gameCard.hidden = !gameCard.hidden
            addForm.hidden = !addForm.hidden
        }
        gamesList.hidden = !gamesList.hidden
        gameApi.fetchGames()
    })  

    // searchButton.addEventListener('click', function(){
    //     searchGames()
    // })

    addSubmit.addEventListener('click', function(){
       if(!gamesList.hidden){
        gamesList.hidden = !gamesList.hidden
        }    
       gameApi.newGamePost()
       gameSection.hidden = !gameSection.hidden
       addForm.reset() 
    }) 

    editButton.addEventListener('click', () =>{
       let game_id = editButton.name
       const currentGameApi = new Api(`${basicUrl}/games/${game_id}`)
        currentGameApi.fetchEditGame()
    })

    randomButton.addEventListener('click', () =>{

        if(!gamesList.hidden || !gameCard.hidden || !addForm.hidden){
            gamesList.hidden = true
            gameCard.hidden = true
            addForm.hidden = true
            }  
        console.log(Game.all)
    })

}); 
