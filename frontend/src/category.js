class Category{
    static all = []
    constructor(name, gameId){
        this.name = name;
        this.gameId = gameId

        Category.all.push(this)
    }

    fetchCategory(id) {
        fetch(`${basicUrl}/categories/${id}`)
        .then(resp =>resp.json())
        .then(data =>renderGame(data))
      }
}