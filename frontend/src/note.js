class Note{
    constructor(content, userId){
        this.content = content;
        this.userId = userId;
    }

    static renderNoteForm(info){
        let noteForm = document.createElement('form')
        noteForm.innerHTML = `
        <label>Username</label>
        <input type="text" id="${info.id}-input" value="${info.username}"></input>
        <label>Note</label>
        <input type="text" id="note-input"></input>
        <button type="button" id="note-submit">Submit</button>
        `
        gameCard.append(noteForm)
    }
}