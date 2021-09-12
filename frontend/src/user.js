class User{

    constructor({username}){
        this.username = username;
    }

    static renderIntro(data){
        const userInfo = new User(data)
        signUpButton.hidden = true
        let intro = document.createElement('h2')
        intro.innerHTML = `Welcome ${data.username}`
        intro.id = "user-welcome"
        navBar.append(intro)
        return userInfo
    }
}