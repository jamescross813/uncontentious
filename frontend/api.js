async function newGamePost(){
let inputValue = document.getElementsByClassName("input-text")
console.log(inputValue[0])
let gameFormData = {
title: inputValue[0].value,
// description: descriptionInput.value,
// minPlayers: minPlayersInput.value,
// maxPlayers: maxPlayersInput.value,
// playTime: playTimeInput.value,
// gameType: gameTypeInput.value
}

let configObj = {
    method: "POST",
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(gameFormData)
};

fetch(`${basicUrl}/games`, configObj)
.then(resp => resp.json())
.then(data => console.log(data))
}
