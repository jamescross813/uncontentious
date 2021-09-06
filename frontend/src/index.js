
document.addEventListener("DOMContentLoaded", function() {
    const gameApi = new Api(`${basicUrl}/games`)
    
    // searchFormButton.addEventListener('click', ()=> {
    //     if(!addForm.hidden){
    //         addForm.hidden = !addForm.hidden 
    //        console.log("done")
    //     } 
    //     searchForm.hidden = !searchForm.hidden
    // });

    addFormButton.addEventListener('click', function () {
        // if(!searchForm.hidden){
        //     searchForm.hidden = !searchForm.hidden 
        // } 
        addForm.hidden = !addForm.hidden
        
    })

    viewButton.addEventListener('click', () =>{
        gameCard.hidden = !gameCard.hidden
        gameApi.fetchGames()
    })

    catButton.addEventListener('click', ()=>{
        Category.fetchCategories
    })

    // searchButton.addEventListener('click', function(){
    //     searchGames()
    // })

    // addSubmit.addEventListener('click', function(){
    //     newGamePost()
    // })

    // titleOne.addEventListener('mouseover', function(){
    //     console.log("thing is happening")
    // })

    // randomize.addEventListener('click', () =>{
    //     let randomNum
    //     function randomNumGen(){
    //         return randomNum = Math.floor(Math.random()* 10)  
    //     }
    //    console.log(randomNum)
    //     if(fetchGame(randomNum)===true){
    //         renderGame(randomNum)
    //     }else{
    //         randomNumGen()
    //     }
        

    // })
    

}); 
