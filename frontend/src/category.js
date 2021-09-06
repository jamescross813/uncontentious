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
    
    static renderCategoriesForForm(data){
        console.log("here in render")
        return data.map(r => {
            const newCat = new Category(r)
            newCat.renderNewForm(r)
        })
    }
    renderName(){
        let catName = document.createElement('h3')
            catName.innerHTML = this.name
            catCard.append(catName)
    }

    renderNewForm(){
        console.log("here in other render")
        catSection.innerHTMl = `<input type="checkbox" id="category-input-${this.id}" name="category" placeholder="Category" class="input-text"
                    value="${this.name}">${this.name}`
        
    }
}
