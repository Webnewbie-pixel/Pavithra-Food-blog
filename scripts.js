
    //get the left sidebar and right conent area elements //
const briyaniList = document.getElementById("briyani-list");
const recipeContent = document.getElementById("recipe-content");
console.log("javascript is running")
//Define the recipes as an object //
const recipes = {
  'chicken-briyani' : {
    title : 'Chicken Briyani',
    ingredients: ['Basmat Rice - 2 Cups',
                   '1 lb boneless, skinless Chicken breast/thigh, cut into small pieces',
                   'Water  - 4 Cups',
                   'Oil - 2 tbsp or as per your need',
                   'Onion thinly sliced - 2',
                   'Garlic - 2 Cloves Minced',
                   'Grated Ginger - 1 tsp',
                   'Cumin seeds - 1 tsp',
                   'Bay leaf - 1',
                   'Star anise - 1',
                   'Black peppercorns - few',
                   'Cinnamon sticks - 1',
                   'Nutmeg(optional) - 1tsp (grounded)',
                   'Fennel Seeds - 1 tsp',
                   'Coriander Powder - 1 tsp',
                   'Garam Masala - 1 tsp',
                   'Turmeric Powder - 1 tsp',
                   'Red Chilli Powder - 1 tsp',
                   'Curd - As required',
                   'Salt - to taste',
                   'Lemon Juice - 2 tbsp',
                   'Fresh Cilantro, chopped',
                   'Mint leaves - Handful'
    ],
    instructions: ['Rinse rice; Soak for 30 min. Drain and set aside.',
                   'Heat Oil; Add bayleaf, star anise, cinnamon stick, black peppercorns and fennel seeds;Let it splutter ',
                   'Add onion, garlic, giner, cumin seeds and saute it till onion turns brown.',
                   'Add chicken; then add coriander powder, turmeric powder, red chillie powder and garam masala and saute it well.',
                   'Add curd to the chicken and spice mixture; Leave it for few mins. Add water if required',
                   'Add mint leaves and leave it for 15-18 mins or until the chicken is cooked through',
                   'In a seperate pot, boil water; add rice. Cook until 70% done.',
                   'Layer: rice, chicken mixture in a pot; seal with dough(Optional)',
                   'Cook on low heat for 10 - 15 minutes. ',
                   'Yumm !Your food is ready now !Serve hot with Raitha or brinjal curry'
    ]
    },
    'mutton-briyani' : {
      title: 'Mutton-Briyani',
      ingredients : ['Basmat Rice - 2 Cups',
        '1 lb mutton/lamb, cut into small pieces',
        'Water  - 4 Cups',
        'Oil - 2 tbsp or as per your need',
        'Onion thinly sliced - 2',
        'Garlic - 2 Cloves Minced',
        'Grated Ginger - 1 tsp',
        'Cumin seeds - 1 tsp',
        'Bay leaf - 1',
        'Star anise - 1',
        'Black peppercorns - few',
        'Cinnamon sticks - 1',
        'Nutmeg(optional) - 1tsp (grounded)',
        'Fennel Seeds - 1 tsp',
        'Coriander Powder - 1 tsp',
        'Garam Masala - 1 tsp',
        'Turmeric Powder - 1 tsp',
        'Red Chilli Powder - 1 tsp',
        'Curd - As required',
        'Salt - to taste',
        'Lemon Juice - 2 tbsp',
        'Fresh Cilantro, chopped',
        'Mint leaves - Handful'
],
      instructions :['Rinse rice; Soak for 30 min. Drain and set aside.',
        'Heat Oil; Add bayleaf, star anise, cinnamon stick, black peppercorns and fennel seeds;Let it splutter ',
        'Add onion, garlic, giner, cumin seeds and saute it till onion turns brown.',
        'Add mutton; then add coriander powder, turmeric powder, red chillie powder and garam masala and saute it well.',
        'Add curd to the chicken and spice mixture; Leave it for few mins. Add water if required',
        'Add mint leaves and leave it for 15-18 mins or until the chicken is cooked through',
        'In a seperate pot, boil water; add rice. Cook until 70% done.',
        'Layer rice, mutton mixture in a pot; seal with dough(Optional)',
        'Cook on low heat for 10 - 15 minutes. ',
        'Sprinkle some fried dried onions and tsp of Ghee(Optional).',
        'Yumm !Your food is ready now !Serve hot with Raitha or brinjal curry'
],
    }

  
  }
//Add event listener to the left sidebar links

briyaniList.addEventListener('click', (e) => {
  recipeContent.style.color ='black';
  recipeContent.style.fontSize = '23px';
  recipeContent.style.fontStyle ='italic';
  recipeContent.style.width = '250px';
  recipeContent.style.textAlign='center';
  
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
  <h1>${recipe.title}</h1><br> 
  <h2>Ingredients: </h2><br>
  
  ${recipe.ingredients.map((ingredient) =>
    `<li>${ingredient}</li>`).join('')}
    
    <br>
    <h2>Instructions:</h2><br>
    
    ${recipe.instructions.map((instruction) =>
    `<li>${instruction}</li>`).join('')}

    

    `;
   recipeContent.innerHTML = html;
  
}

