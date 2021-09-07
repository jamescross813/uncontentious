
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
        if(!gameCard.hidden){
            gameCard.hidden = !gameCard.hidden
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

    // randomize.addEventListener('click', () =>{
    //     let randomNum
    //     function randomNumGen(){
    //         return randomNum = Math.floor(Math.random()* 10)  
    //     }
    //    console.log(randomNum)
    //     if(fetchGame(randomNum)===true){
    //         renderGame(randomNum)
    //     }else{
    //         randomNumGen()
    //     }
    // })

}); 
