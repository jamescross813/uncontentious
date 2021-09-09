class Note{
    constructor(content, userId){
        this.content = content;
        this.userId = userId;
    }

    static renderNoteForm(){
        let user =document.getElementById("user-welcome")
        let text = user.innerText
        let splitText =text.split(" ")
        let username = splitText[1]
        console.log(user)
        let noteForm = document.createElement('form')
        noteForm.innerHTML = `
        <label>Username</label>
        <input type="text" id="note-input" value="${username}"></input>
        <label>Note</label>
        <input type="text" id="note-input"></input>
        <button type="button" id="note-submit">Submit</button>
        `
        gameCard.append(noteForm)
    }
}