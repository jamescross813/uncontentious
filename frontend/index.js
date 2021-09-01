
document.addEventListener("DOMContentLoaded", function() {
    const searchForButton = document.getElementById("search-for")
    const addButton = document.getElementById("add")
    const searchForm = document.getElementById("search-games")
    const addForm = document.getElementById("add-game-form")
    
   
    searchForButton.addEventListener('click', ()=> {
        searchForm.hidden = !searchForm.hidden
    });

    addButton.addEventListener('click', function () {
        addForm.hidden = !addForm.hidden
    })

}); 
