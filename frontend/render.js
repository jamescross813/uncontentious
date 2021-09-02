const basicUrl= "http://localhost:3000/"
const gameList = document.getElementById('game-list');
const searchForm = document.getElementById("search-games");
const addForm = document.getElementById("add-game-form");

function fetchGames() {
    fetch(`${basicUrl}/games`)
    .then(resp =>resp.json())
    .then(data=>console.log(data))
    
    
  };
  
document.addEventListener("DOMContentLoaded", function() {
    fetchGames()
})
