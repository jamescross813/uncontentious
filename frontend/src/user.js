class User{

    constructor({username, }){
        this.username = username;
    }

    static renderForm(){
        let signUpForm = document.createElement("form")
        signUpForm.innerHTML = `
        <label>Username:</label>
        <input type="text" id="username-input" value="">
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