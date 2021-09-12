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
        const signUpSubmit = document.getElementById("login-submit")
        signUpSubmit.addEventListener('click', ()=>{
            userApi.newUserPost()
            let signUpForm = document.getElementById("sign-up-form")
            signUpForm.reset()
            signUpForm.remove()
        })
    })
    
}); 
 