function newGamePost(){
let gameFormData = {
title: titleInput.value,
description: descriptionInput.value,
minPlayers: minPlayersInput.value,
maxPlayers: maxPlayersInput.value,
playTime: playTimeInput.value,
gameType: gameTypeInput.value
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
