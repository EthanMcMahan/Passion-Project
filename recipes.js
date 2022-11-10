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

/* create 4 recipes: each recipe needs a title, a description, and a link to an image.
find ingredients for each recipe.
create a spreadsheet in js comments.*/

/* 1) Healthy Coconut Oatmeal (title)

A fast and healthy breakfast cereal or high-energy snack. Oatmeal made with coconut, raisins, cranberries, walnuts. 
Brown rice can be used in place of oatmeal. (description)

https://www.allrecipes.com/thmb/XyJhW1ZGehsVjPycmiCjK1A0plk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1032552-fdec19915bd346ff8b38f6ce21fbc3a3.jpg (image link)

3 ½ cups plain or vanilla soy milk

¼ teaspoon salt

2 cups rolled oats

¼ cup pure maple syrup

⅓ cup raisins

⅓ cup dried cranberries

⅓ cup sweetened flaked coconut

⅓ cup chopped walnuts

1 (8 ounce) container plain yogurt (Optional)

3 tablespoons honey (Optional) (ingredients)*/

/* 2) Hawaiian Chicken Kabobs (title)

These kabobs are tender, sweet, and delicious. They're easy to make and only require a few ingredients. (description)

https://www.allrecipes.com/thmb/dtz6-wP053dVzLgmHlW6pMcdUN4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1001317-hawaiian-chicken-kabobs-lauralovinglife-1x1-1-041f0462b70e489d902080e754361645.jpg (image link)

3 tablespoons soy sauce

3 tablespoons brown sugar

2 tablespoons sherry

1 tablespoon sesame oil

¼ teaspoon ground ginger

¼ teaspoon garlic powder

8 skinless, boneless chicken breast halves - cut into 2 inch pieces

1 (20 ounce) can pineapple chunks, drained

skewers (ingredients)*/

/* 3) Chicken salad with Apples, Grapes, and Walnuts (title)

This chicken salad with apples gets extra crunch from walnuts and a subtle sweetness from grapes. 
I had chicken breasts left over from a BBQ but I couldn't find a recipe I liked, so I played around and came up with this. (description)

https://www.allrecipes.com/thmb/TnwXCgNQTvlb5z8sxJdkWb4LEFk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4536333-c42e71cb0f984e6ab93d3320f3f87491.jpg (image link)

4 cooked chicken breasts, shredded

2 medium Granny Smith apples, cut into small chunks

2 cups chopped walnuts, or to taste

½ red onion, chopped

3 stalks celery, chopped

3 tablespoons lemon juice

½ cup vanilla yogurt

5 tablespoons creamy salad dressing (such as Miracle Whip®)

5 tablespoons mayonnaise

25 seedless red grapes, halved (ingredients)*/

/* 4) Cranberry Nut Oatmeal Granola Bars (title)

Healthy homemade granola bars. This recipe is easily customizable. 
You can substitute the dried fruit, pecans, and chocolate morsels out for what you like. (description)

https://www.allrecipes.com/thmb/i-JiAFKSMoGHvUeA6mikNNDiZqU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2913269-4b2dc579709f44fea276932680462949.jpg (image link)

2 cups quick-cooking oats

1 cup dried cranberries

1 cup pecan halves

½ cup ground flax seed

½ cup milk chocolate chips

¼ cup wheat germ

1 cup packed light brown sugar

½ cup honey

2 tablespoons vegetable oil

½ teaspoon salt

1 teaspoon vanilla extract

½ teaspoon ground cinnamon (ingredients)*/

