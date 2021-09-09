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
        <input type="text" id="username-input" value=""></input>
        <label>Note</label>
        <input type="text" id="note-content-input"></input>
        <button type="button" id="note-submit">Submit</button>
        `
        gameCard.append(noteForm)

        const noteSubmit = document.getElementById("note-submit")

        noteSubmit.addEventListener('click', ()=>{
            const noteApi = new Api(`${basicUrl}/notes`)
            noteApi.newNotePost()
        })
    }

    static renderNote(data){
        let noteContent = document.createElement('p')
        noteContent.id = "note"
        noteContent.innerHTML = data.content
        
        // let noteUsername = document.createElement('h6')
        // noteUsername.innderHTML = data.username

        gameCard.append(noteContent)
    }
}