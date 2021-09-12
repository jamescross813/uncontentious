class Note{
    constructor(content, game_id, username, id){
        this.content = content;
        this.username = username;
        this.id = id;
        this.gameId = game_id
    }

    static renderNoteForm(){
        let noteForm = document.createElement('form')
        noteForm.id = "note-form"
        noteForm.innerHTML = `
            <label>Username</label><br>
            <input type="text" id="username-input"></input><br>
            <label>Note</label><br>
            <input type="text" id="note-content-input"></input><br>
            <button type="button" id="note-submit">Submit</button>
            `
        gameCard.append(noteForm)

        let noteSubmit = document.getElementById("note-submit")

        let noteEvent = ()=>{noteSubmit.addEventListener('click', ()=>{
            const noteApi = new Api(`${basicUrl}/notes`)
            noteApi.newNotePost()
            noteForm.reset()
            noteForm.remove()
        })
    }
        noteEvent()
    }

    static renderNote(data){
        let noteCard = document.createElement('span')
        noteCard.className = "note"

        let noteContent = document.createElement('p')
        noteContent.id = `note-${data.id}`
        noteContent.innerHTML = data.content
        
        let noteUsername = document.createElement('p')
        noteUsername.innerHTML = `Posted by: ${data.username}`
        noteUsername.id = "username"

        noteCard.append(noteContent, noteUsername)
        
        if(gameSection.hidden === true){
            floatGameCard.append(noteCard)
        }else{
            gameCard.append(noteCard)
        }
    }


    static gameNoteSort(data){
        data.map(n => {
            console.log(n.id)
            const noteApi = new Api(`${basicUrl}/notes/${n.id}`)
            noteApi.fetchNote()
        })
    }
}