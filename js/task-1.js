const categories = document.querySelectorAll(" #categories .item");
console.log(`Nunber of categories : ${categories.length}`);

categories.forEach(categorie => {
    const categoryTitle = categorie.querySelector("h2")
    categoryTitle.classList.add("category-title")

    const categoryList = categorie.querySelector("ul")
    categoryList.classList.add("category-list")
    const categoryItems = categorie.querySelectorAll("li")
    categoryItems.forEach(categoryItem => {
        categoryItem.classList.add("category-item")
    });

    console.log(`Category : ${categoryTitle.textContent}`);
    console.log(`Elements : ${categoryItems.length}`);

})



