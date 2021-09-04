
document.addEventListener("DOMContentLoaded", function() {
    const searchFormButton = document.getElementById("search-for");
    const addFormButton = document.getElementById("add");
    const searchForm = document.getElementById("search-games");
    const addForm = document.getElementById("add-game-form");
    const viewButton = document.getElementById("all-games-view");
    const searchButton = document.getElementById("submit-search")
    const addSubmit = document.getElementById("add-submit")
    const titlesOfGames = document.getElementsByClassName("title")
    const randomize = document.getElementById("random-game")
    
    searchFormButton.addEventListener('click', ()=> {
        if(!addForm.hidden){
            addForm.hidden = !addForm.hidden 
           console.log("done")
        } 
        searchForm.hidden = !searchForm.hidden
    });

    addFormButton.addEventListener('click', function () {
        if(!searchForm.hidden){
            searchForm.hidden = !searchForm.hidden 
        } 
        addForm.hidden = !addForm.hidden
        
    })

    viewButton.addEventListener('click', () =>{
        gameCard.hidden = !gameCard.hidden
        fetchGames()
    })

    searchButton.addEventListener('click', function(){
        searchGames()
    })

    addSubmit.addEventListener('click', function(){
        newGamePost()
    })

    // titlesOfGames.addEventListener('mouseover', function(){
    //     console.log("thing is happening")
    // })

    randomize.addEventListener('click', () =>{
        let randomNum
        function randomNumGen(){
            return randomNum = Math.floor(Math.random()* 100) -7 
        }
       
        if(fetchGame(randomNum)===true){
            renderGame(randomNum)
        }else{
            randomNumGen()
        }
        

    })
    

}); 
