class User{

    constructor({username, password_digest}){
        this.username = username;
        this.password_digest = password_digst;
    }

    renderForm(){
        let signUpForm = document.createElement("form")
        signUpFrom.innerHTML = `
        <label>Username:</label>
        <input type="text" id="username-input" value="${this.username}">
        <label>Password:</label>
        <input type="password" id="user_password" value=""></input>
        <button type="button" id="login-submit">Submit</button>`
    }
}