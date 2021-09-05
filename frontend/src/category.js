class Category{
    static all = []
    constructor(name, gameId){
        this.name = name;
        this.gameId = gameId

        Category.all.push(this)
    }

    
}