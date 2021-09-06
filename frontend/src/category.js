class Category{
    static all = []
    constructor({category_name}){
        this.name = category_name;
        // this.gameId = gameId
        Category.all.push(this)
    }

    static renderCategories(data){
        return data.map(r => {
            const newCat = new Category(r)
            newCat.renderName(r)
        })
    }

    renderName(){
        let catName = document.createElement('h2')
            catName.innerHTML = this.name
            gameCard.append(catName)
    }
}