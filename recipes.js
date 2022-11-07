let foodChoice = Math.floor(Math.random());
function clickButton(foodChoice) {
    console.log(foodChoice);
};

const findRecipesButton = document.querySelector("#findRecipes");
findRecipesButton.addEventListener("click", function(){
    console.log("#findRecipes", click);
});
