class Category{
    static all = []
    constructor({category_name, id}){
        this.name = category_name;
        this.id = id;
        Category.all.push(this)
    }

    static renderCategories(data){
        return data.map(r => {
            const newCat = new Category(r)
            newCat.renderName(r)
        })
    }

    renderName(){
        let catName = document.createElement('h3')
            catName.innerHTML = this.name
            catCard.append(catName)
    }
}