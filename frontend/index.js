
document.addEventListener("DOMContentLoaded", function() {
    const searchForButton = document.getElementById("search-for");
    const addButton = document.getElementById("add");
    const searchForm = document.getElementById("search-games");
    const addForm = document.getElementById("add-game-form");
    const viewButton = document.getElementById("all-games-view");
    const listByCategoryButton = document.getElementById("games-by-category");
    const listByTypeButton = document.getElementById("games-by-type")

    searchForButton.addEventListener('click', ()=> {
        if(!addForm.hidden){
            addForm.hidden = !addForm.hidden 
           console.log("done")
        } 
        searchForm.hidden = !searchForm.hidden
    });

    addButton.addEventListener('click', function () {
        if(!searchForm.hidden){
            searchForm.hidden = !searchForm.hidden 
        } 
        addForm.hidden = !addForm.hidden
        
    })

    viewButton.addEventListener('click', () =>{
        gameCard.hidden = !gameCard.hidden
    })

    listByCategoryButton.addEventListener('click', function(){
        
    })

    listByTypeButton.addEventListener('click', function(){

    })



}); 
