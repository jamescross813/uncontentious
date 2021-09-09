class User{

    constructor({username, password_digest, id}){
        this.username = username;
        this.password_digest = password_digest;
        this.id = id
    }

    static renderForm(){
        let signUpForm = document.createElement("form")
        signUpForm.innerHTML = `
        <label>Username:</label>
        <input type="text" id="username-input" value="">
        <label>Password:</label>
        <input type="password" id="user_password" value=""></input>
        <button type="button" id="login-submit">Submit</button>`
        signUpForm.id = "sign-up-form"
        navBar.append(signUpForm)
    }

    static renderIntro(data){
        
        const userInfo = new User(data)
        
        loginButton.hidden = true
        signUpButton.hidden = true
        let intro = document.createElement('h2')
        intro.innerHTML = `Welcome ${data.username}`
        navBar.append(intro)
    }
}