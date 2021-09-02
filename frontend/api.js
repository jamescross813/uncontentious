async function newGamePost(){
let inputValue = document.getElementsByClassName("input-text")

let gameFormData = {
description: inputValue[3].value,
min_players: inputValue[1].value,
max_players: inputValue[2].value,
max_time: inputValue[7].value,
play_style: inputValue[6].value,
game_type: inputValue[4].value,
game_title: inputValue[0].value
}

console.log(JSON.stringify(gameFormData))

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
