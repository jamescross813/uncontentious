class Note{
    constructor(content, game_id, username, id){
        this.content = content;
        this.username = username;
        this.id = id;
        this.gameId = game_id
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
            <input type="text" id="username-input"></input>
            <label>Note</label>
            <input type="text" id="note-content-input"></input>
            <button type="button" id="note-submit">Submit</button>
            `
        gameCard.append(noteForm)

        let noteSubmit = document.getElementById("note-submit")

        noteSubmit.addEventListener('click', ()=>{
            const noteApi = new Api(`${basicUrl}/notes`)
            noteApi.newNotePost()
            noteForm.reset()
            noteForm.remove()
        })
    }

    static renderNote(data){
       
        let noteContent = document.createElement('p')
        noteContent.id = `note-${data.id}`
        noteContent.innerHTML = data.content
        
        let noteUsername = document.createElement('h6')
        noteUsername.innerHTML = `Poster by: ${data.username}`

        gameCard.append(noteContent, noteUsername)
    }

    renderNewNote(){
    //    console.log(this)
        let noteContent = document.createElement('p')
        noteContent.id = `note-${this.id}`
        noteContent.innerHTML = this.content
        
        let noteUsername = document.createElement('h6')
        noteUsername.innerHTML = `Poster by: ${this.username}`

        gameCard.append(noteContent, noteUsername)
    }

    static gameNoteSort(data){
        // console.log(data)
        data.map(n => {
            console.log(n.id)
            const noteApi = new Api(`${basicUrl}/notes/${n.id}`)
            noteApi.fetchNote()
        })
    }
}