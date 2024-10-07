
    //get the left sidebar and right conent area elements //
const briyaniList = document.getElementById("briyani-list");
const recipeContent = document.getElementById("recipe-content");
console.log("javascript is running")
//Define the recipes as an object //
const recipes = {
  'chicken-briyani' : {
    title : 'Chicken Briyani',
    ingredients: ['cook rice', 'Marinate Chicken', 'Cook Chicken'],
    instructions: ['Cook chicken properly']
    },
    'mutton-briyani' : {
      title: 'Mutton-Briyani',
      ingredients : ['Basmati rice', 'Marinate Mutton', 'Cook mutton'],
      instructions :['cook the mutton properly']
    }

  
  }
//Add event listener to the left sidebar links

briyaniList.addEventListener('click', (e) => {
  e.preventDefault();
  if(e.target.tagName === 'A') {
    const recipeId = e.target.getAttribute('data-recipe');
    displayRecipe(recipes[recipeId]);
  }
});
//Function to display the selected recipe 
function displayRecipe(recipe) {
  if(!recipe) {
    recipeContent.innerHTML ="<p>Recipe not found.</p>";
    return;
  }
  const html = `
  <h1>${recipe.title}</h1>
  <h2>Ingredients: </h2>
  <ul>
  ${recipe.ingredients.map((ingredient) =>
    `<li>${ingredient}</li>`).join('')}
    </ul>
    <h2>Instructions :</h2>
    <ol>
    ${recipe.instructions.map((instruction) =>
    `<li>${instruction}</li>`).join('')}
    </ol>

    `;
   recipeContent.innerHTML = html;
  
}

