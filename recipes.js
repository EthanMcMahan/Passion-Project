const findRecipesButton = document.querySelector("#find-recipes");
findRecipesButton.addEventListener("click", function() {
    const input = document.querySelector("#food-choice").value;
    console.log(input);
});

{/* <div class="recipe-holder">
                    <div class="recipe">
                        <img src="https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261_960_720.jpg" width="50%" alt="image of apple stacked on books">
                        <h3 class="title">title</h3>
                        <p class="description">description</p>
                    </div>
                </div> */}
function createRecipe() {
const recipeContainer = document.querySelector(".middle-container"); 
const recipeHolder = document.createElement("div");
recipeHolder.classList.add("recipe-holder");
const recipe = document.createElement("div");
recipe.classList.add("recipe");
recipeHolder.append(recipe);
const image = document.createElement("img");
image.classList.add("image");
image.src="https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261_960_720.jpg";
recipe.append(image);
const title = document.createElement("h3");
title.classList.add("title");
title.innerHTML = "title";
recipe.append(title);
const description = document.createElement("p");
description.classList.add("description");
description.innerHTML = "description";
recipe.append(description);
recipeContainer.append(recipeHolder);                
};

for (let i = 0; i < 12; i++) {
    createRecipe();
    }

// create 4 recipes; each recipe needs a title, description, and a link to an image.//
// find ingredients for each recipe.//
// create a spreadsheet in js comments.//
