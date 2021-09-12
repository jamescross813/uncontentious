document.addEventListener("DOMContentLoaded", ()=>{
    const gameApi = new Api(`${basicUrl}/games`)
    const userApi = new Api(`${basicUrl}/users`)


    addFormButton.addEventListener('click', ()=>{
        if(!gamesList.hidden){
            gamesList.hidden = !gamesList.hidden
            floatGameCard.hidden = true
        }
        addForm.hidden = !addForm.hidden       
    })

    viewButton.addEventListener('click', () =>{
        if(!gameSection.hidden || !addForm.hidden){
            gameSection.hidden = true
            addForm.hidden = true
        }
        gamesList.hidden = false
        gameApi.fetchGames()   
    })  

    addSubmit.addEventListener('click', ()=>{   
       gameApi.newGamePost()
       gameSection.hidden = !gameSection.hidden
       
       addForm.reset() 
    }) 

    editButton.addEventListener('click', ()=>{
       let game_id = editButton.name
       let currentGameApi = new Api(`${basicUrl}/games/${game_id}`)
        currentGameApi.fetchEditGame()
    })

    randomButton.addEventListener('click', ()=>{

        if(!gamesList.hidden || !addForm.hidden){
            gamesList.hidden = true
            addForm.hidden = true
            }  
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
 