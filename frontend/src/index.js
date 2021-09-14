document.addEventListener("DOMContentLoaded", ()=>{
    const gameApi = new Api(`${basicUrl}/games`)
    const userApi = new Api(`${basicUrl}/users`)

    addFormButton.addEventListener('click', ()=>{
       
        gamesList.hidden = true
        floatGameCard.hidden = true
        gameCard.hidden = true
        addForm.hidden = false
        let data = ""
        Game.renderNewForm(data)      
    })

    viewButton.addEventListener('click', () =>{
        
        gameSection.hidden = true
        addForm.hidden = true
        gamesList.hidden = false
        gameApi.fetchGames()   
    })  

    randomButton.addEventListener('click', ()=>{
        gameCard.hidden = false
        gamesList.hidden = true
        addForm.hidden = true
        gameSection.hidden = false
        floatGameCard.hidden = true
        
        randomizer = ()=>{
            let num = Math.floor(Math.random()*10)
            currentGameApi = new Api(`${basicUrl}/games/${num}`)
            currentGameApi.fetchGame()
        }
        randomizer() 
    })

    signUpButton.addEventListener('click', ()=>{
        signUpForm.hidden = false
        gameCard.hidden = true
        gamesList.hidden = true
        addForm.hidden = true
        gameSection.hidden = true
        floatGameCard.hidden = true

    })

    signUpSubmit.addEventListener('click', ()=>{
        userApi.newUserPost()
        
        signUpForm.reset()
        signUpForm.hidden = true
    })

    dark.addEventListener('click', ()=>{
        if (document.body.style.backgroundColor === "black"){
            document.body.style.backgroundColor = "white"
        }else{
            document.body.style.backgroundColor = "black"
        }
    })
    
}); 
 