
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
        
        
        // editForm.innerHTML = `
        // <input type="text" id="title-input" name="game-title" placeholder="Name that game..." class="input-text"
        //             value=""><br>
        //         <input type="text" id="player-range-min-input" name="player-range-min" placeholder="Min players.."
        //             class="input-text" value=""><br>
        //         <input type="text" id="player-range-max-input" name="player-range-max" placeholder="Max players.."
        //             class="input-text" value=""><br>

        //         <input type="text" id="game-type-input" name="game-type" placeholder="Card, Board or Tile...?"
        //             class="input-text" value=""><br>
        //         <input type="text" id="play-style-input" name="play-style" placeholder="Competitive, Co-op or Party...?"
        //             class="input-text" value=""><br>
        //         <input type="text" id="play-time-input" name="play-time" placeholder="10, 20, 30?" class="input-text"
        //             value=""><br>
        //         <input type="text" id="category-one" name="game-category-one" placeholder="Category?" class="input-text"
        //             value=""><br>
        //         <input type="text" id="category-two" name="game-category-two" placeholder="Category?" class="input-text"
        //             value=""><br>
        //         <textarea id="description-input" name="description" placeholder="Description..." class="input-text"
        //             value=""></textarea><br>
        //         <button type="button" id="add-submit">Add Game</button>`
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
