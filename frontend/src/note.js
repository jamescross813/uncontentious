class Note{
    constructor(content, userId){
        this.content = content;
        this.userId = userId;
    }

    static renderNoteForm(){
        // let username
        // let user = document.getElementById("user-welcome")
        // if (!user === false){        
        //     let text = user.innerText
        //     let splitText = text.split(" ")
        //     username = splitText[1]
        // }else{
        //     username = ""
        // }
        // console.log(username)
        let noteForm = document.createElement('form')
        noteForm.innerHTML = `
        <label>Username</label>
        <input type="text" id="note-input" value=""></input>
        <label>Note</label>
        <input type="text" id="note-input"></input>
        <button type="button" id="note-submit">Submit</button>
        `
        gameCard.append(noteForm)
    }
}