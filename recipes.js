{/* <div class="recipe-holder">
                    <div class="recipe">
                        <img src="https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261_960_720.jpg" width="50%" alt="image of apple stacked on books">
                        <h3 class="title">title</h3>
                        <p class="description">description</p>
                    </div>
                </div> */}
function createRecipe(recipeObj) {
const recipeContainer = document.querySelector(".middle-container"); 
const recipeHolder = document.createElement("div");
recipeHolder.classList.add("recipe-holder");
const recipe = document.createElement("div");
recipe.classList.add("recipe");
recipeHolder.append(recipe);
const image = document.createElement("img");
image.classList.add("image");
image.src= recipeObj.image;
recipe.append(image);
const title = document.createElement("h3");
title.classList.add("title");
title.innerHTML = recipeObj.title;
recipe.append(title);
const description = document.createElement("p");
description.classList.add("description");
description.innerHTML = recipeObj.description;
recipe.append(description);
recipeContainer.append(recipeHolder);                
};

let obj = {
    title: "Healthy Coconut Oatmeal",
    description: "A fast and healthy breakfast cereal or high-energy snack. Oatmeal made with coconut, raisins, cranberries, walnuts. Brown rice can be used in place of oatmeal.",
    image: "https://www.allrecipes.com/thmb/XyJhW1ZGehsVjPycmiCjK1A0plk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1032552-fdec19915bd346ff8b38f6ce21fbc3a3.jpg",
    ingredients: ["soy milk", "salt", " oats", "syrup", "raisins", "walnuts"],
};

let obj2 = {
    title: "Hawaiian Chicken Kabobs",
    description: "These kabobs are tender, sweet, and delicious. They're easy to make and only require a few ingredients.",
    image: "https://www.allrecipes.com/thmb/dtz6-wP053dVzLgmHlW6pMcdUN4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1001317-hawaiian-chicken-kabobs-lauralovinglife-1x1-1-041f0462b70e489d902080e754361645.jpg",
    ingredients: ["chicken breasts", "pineapple", "soy sauce", "sesame oil", "brown sugar"],
};

let obj3 = {
    title: "Chicken salad with Apples, Grapes, and Walnuts",
    description: "This chicken salad with apples gets extra crunch from walnuts and a subtle sweetness from grapes. I had chicken breasts left over from a BBQ but I couldn't find a recipe I liked, so I played around and came up with this.",
    image: "https://www.allrecipes.com/thmb/TnwXCgNQTvlb5z8sxJdkWb4LEFk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4536333-c42e71cb0f984e6ab93d3320f3f87491.jpg",
    ingredients: ["chicken breasts", "apples", "walnuts", "grapes", "yogurt"],
};

let obj4 = {
    title: "Cranberry Nut Oatmeal Granola Bars",
    description: "Healthy homemade granola bars. This recipe is easily customizable. You can substitute the dried fruit, pecans, and chocolate morsels out for what you like.",
    image: "https://www.allrecipes.com/thmb/i-JiAFKSMoGHvUeA6mikNNDiZqU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2913269-4b2dc579709f44fea276932680462949.jpg",
    ingredients: ["oats", "cranberries", "pecans", "chocolate chips", "brown sugar"]
};

let obj5 = {
    title: "Instant Pot Chicken Fried Rice",
    description: "Traditional chicken fried rice cooks faster in your electric pressure cooker. This Instant Pot® method gives you a fluffy and flavorful meal, but eliminates the need to start with already-cooked rice.",
    image: "https://www.allrecipes.com/thmb/lxRVatFG0qTD67jiHzPpbyJvSBY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7356661-626145649767409295a8fac353c254de.jpg",
    ingredients: ["eggs", "chicken breasts", "rice", "broccoli", "peas", "carrots"],
};

let obj6 = {
    title: "Creamy Coconut Milk Rice Pudding",
    description: "This easy and delicious simple rice pudding is made with all organic ingredients, loaded with coconut milk, vanilla, and nutmeg for such a comforting treat!",
    image: "https://www.allrecipes.com/thmb/gZdYRg4-9lVOg4BUmw2vPRvQYjQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/9059403-ada7fc1614174a7ba894e40ce8fa630a.jpg",
    ingredients: ["rice", "milk", "eggs", "peaches", "raisins", "cinnamon"],
};

let obj7 = {
    title: "Summer Fresh Fruit Salad",
    description: "A delicious, colorful blend of summer's fresh fruit topped with citrus dressing and finished with toasted pecans.",
    image: "https://www.allrecipes.com/thmb/W41fVfrkW2BVZTiBND1UnC4mkz4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1004222-480adb6dcfee45f69bc1b62c959a0cfb.jpg",
    ingredients: ["watermelon", "cantaloupe", "pineapple", "strawberries", "peaches", "grapes", "pecans", "kiwi"],
};

let obj8 = {
    title: "Baked Apple-Pecan Maple Pancakes",
    description: "These pancakes have the maple syrup baked right inside of them! Add more if you really like maple syrup.",
    image: "https://www.allrecipes.com/thmb/99nLMU-huitdetJDkYCYUiZmYfo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3164-54b3ca976e57417ea64a9df1034384b1.jpg",
    ingredients: ["milk", "eggs", " pancake mix", " apples", "cinnamon", "pecans", "maple syrup"],
};

let obj9 = {
    title: "Pineapple Cranberry Chicken Breasts",
    description: "A tongue-tantalizing poultry dish that gives chicken the new life you've been looking for!",
    image: "https://www.allrecipes.com/thmb/DIsD32zeHlQ_2ar5IRGSoTf1obI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/39554-90384819942f44e4af268759645d38f3.jpg",
    ingredients: ["chicken breasts", "cranberries", "pineapple", "cinnamon"],
};

let obj10 = {
    title: "Avocado Tuna Salad",
    description: "This tasty avocado tuna salad with crunchy apple, toasted walnuts, celery, red onion, and dill proves that tuna salad doesn't have to be boring!",
    image: "https://www.allrecipes.com/thmb/HE6WfEhJhS_BveWWtiNKaOl9Gqw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/27287-avocado-tuna-salad-ddmfs-4x3-0068-ce1d1006f65a44039d58e24136061d8d.jpg",
    ingredients: ["tuna", "avocado", "apples", "celery", "walnuts", "pickle juice", "mustard", "pepper"],
};

let obj11 = {
    title: "Chicken Caesar Wraps",
    description: "Make a delicious Caesar dressing, or use a good quality purchased Caesar dressing, for these tasty wrap sandwiches.",
    image: "https://www.allrecipes.com/thmb/ITEh8_8n28zYHBv_B9ZOx1VF9CA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/9430711-fa8325116a2c47f8993cb49cc9ac801f.jpg",
    ingredients: ["chicken breasts", "parmesan cheese", "romaine lettuce", "tomatoes", "pita bread", "mustard", "worcestershire sauce"],
};

let obj12 = {
    title: "Maple-Pumpkin Yogurt Parfait",
    description: "An easy-to-make pumpkin yogurt parfait that's perfect for a quick breakfast--or even a light dessert!",
    image: "https://www.allrecipes.com/thmb/rxidltIwsF0Z7oK2hR_HUN5K-0s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7216392-9c15276a6ce940138d849b137e5d56f6.jpg",
    ingredients: ["yogurt", "maple syrup", "vanilla extract", "pumpkin puree", "cinnamon", "granola"],
};

let obj13 = {
    title: "Grilled Teriyaki Salmon",
    description: "Flavorful, rich teriyaki marinade for salmon and other firm seafood.",
    image: "https://www.allrecipes.com/thmb/Ul-JHb2OoKUU5YsQ27MuwZcftXc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/9442599-92191952e57d413ba2519d1c8dc5702a.jpg",
    ingredients: ["teriyaki sauce", "salmon", "apple juice", "brown sugar", "balsamic vinegar", "pepper"],
};

let obj14 = {
    title: "Spicy Potatoes and Scrambled Eggs",
    description: "Eggs and potatoes are a nice combination for a hearty breakfast. This recipe features spicy home fries with classic scrambled eggs.",
    image: "https://www.allrecipes.com/thmb/0YfL1dxvPPLruG37K5IpvmNlDY4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4518439-f3c51eb9d7b6490eb2294ffa19841672.jpg",
    ingredients: ["potatoes", "eggs", "pepper", "cumin", "chili", "turmeric"],
};

let obj15 = {
    title: "Cranberry Apple Casserole",
    description: "Super simple side dish, perfect for holiday or everyday meals. Goes great with chicken, turkey, ham, or pork.",
    image: "https://www.allrecipes.com/thmb/ZqQpXEbZgFyPXviPNtlCNeuyzh8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/836808-f31acb900f54419699cd8da3fe06d371.jpg",
    ingredients: ["apple pie filling", " cranberries", "butter", "oats", "brown sugar"],
};

let recipes = [obj, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15];

for (let i = 0; i < recipes.length; i++) {
    let currentRecipe = recipes[i];
    createRecipe(currentRecipe);
    }

const findRecipesButton = document.querySelector("#find-recipes");
findRecipesButton.addEventListener("click", function() {
    const input = document.querySelector("#food-choice").value;
    console.log(input);
    let filteredRecipes = recipes.filter(function(value) {
        return value.ingredients.includes(input) });
        console.log(filteredRecipes);
    const recipeContainer = document.querySelector(".middle-container");
    recipeContainer.innerHTML = "";
    for (let i = 0; i < filteredRecipes.length; i++) {
        let currentRecipe = filteredRecipes[i];
        createRecipe(currentRecipe);
        }
});

