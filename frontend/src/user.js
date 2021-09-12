class User{

    constructor({username}){
        this.username = username;
    }

    static renderIntro(data){
        const userInfo = new User(data)
        signUpForm.remove()
        let intro = document.createElement('h2')
        intro.innerHTML = `Welcome ${data.username}`
        intro.id = "user-welcome"
        navBar.append(intro)
        return userInfo
    }
}