
document.addEventListener("DOMContentLoaded", function() {
    const searchFormButton = document.getElementById("search-for");
    const addFormButton = document.getElementById("add");
    const searchForm = document.getElementById("search-games");
    const addForm = document.getElementById("add-game-form");
    const viewButton = document.getElementById("all-games-view");
    const searchButton = document.getElementById("submit-search")
    
    searchFormButton.addEventListener('click', ()=> {
        if(!addForm.hidden){
            addForm.hidden = !addForm.hidden 
           console.log("done")
        } 
        searchForm.hidden = !searchForm.hidden
    });

    addFromButton.addEventListener('click', function () {
        if(!searchForm.hidden){
            searchForm.hidden = !searchForm.hidden 
        } 
        addForm.hidden = !addForm.hidden
        
    })

    viewButton.addEventListener('click', () =>{
        gameCard.hidden = !gameCard.hidden
        renderGames()
    })

    searchButton.addEventListener('click', function(){
        searchGames()
    })




}); 
