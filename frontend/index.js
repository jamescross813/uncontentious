
document.addEventListener("DOMContentLoaded", function() {
    const searchForButton = document.getElementById("search-for")
    const addButton = document.getElementById("add")
    const searchForm = document.getElementById("search-games")
    const addForm = document.getElementById("add-game-form")
    
   
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

}); 
