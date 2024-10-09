
    //get the left sidebar and right conent area elements //
const briyaniList = document.getElementById("briyani-list");
const recipeContent = document.getElementById("recipe-content");
//Define the recipes as an object //
const recipes = {
  'chicken-briyani' : {
    title : 'CHICKEN BRIYANI',
    ingredients: ['Basmati Rice - 2 Cups',
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
      title: 'MUTTON BRIYANI',
      ingredients : ['Basmati Rice - 2 Cups',
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
    },

    'Hyderabadi-chicken' : {
      title :'HYDERABADI CHICKEN BRIYANI',
      ingredients : ['For the chicken Marinade:',
                      'Chicken : 1kg(bone-in pieces preferred for more flavour)',
                      'Yogurt : 1 Cup',
                      'Ginger-garlic paste : 2 tablespoons',
                      'Red chillie powder : 2 teaspoons',
                      'Briyani masala : 2 tablespoons',
                      'Turmeric powder : 1 tsp',
                      'Lemon Juice : 2 tablespoons',
                      'salt : to taste',
                      'Fresh mint leaves : 1/4 cup, chopped',
                      'Fresh coriander leaves : 1/4 cup, chopped',
                      'Green chillies : 4-5, slit',
                      'Egg : 1 (optional, helps in binding the marinade)',
                      'FOR THE RICE',
                      'Basmati Rice : 500 gms',
                      'Water : as needed',
                      'Salt : to tase',
                      'Whole Spices',
                      'Bay Leaves : 2',
                      'Cinnamon Sticks : 2-inch piece',
                      'Cloves ; 4-5',
                      'Green cardamom pods : 4',
                      'Black peppercorns : 6-8',
                      'FOR LAYERING',
                      'Onions : 2 large, thinely sliced',
                      'Ghee : 4 tablespoons',
                      'Saffron : a pinch, soaked in 1/4 cup warm milk',
                      'Fried onions : 1/2 cup (optional, for garnish)',
                      'Fresh mint leaves : for layering'

      ],
      instructions : ['1. MARINATE THE CHICKEN:',

                        'In a large mixing bowl, combine yougurt, ginger-garlic paste, red chillie powder, turmeric powder, briyani masala, lemon juice, and salt',
                        'Add the chicken pieces to the marinade, ensuring they are well-coated.',
                        'Mix in the chopped mint, coriander leaves, slit green chillies, and the egg(if using).',
                        'Cover and refrigerate for at least 2 hours, preferably overnight for deeper flavour.',
                          '2. PREPARE THE RICE',
                          'Rinse the basmati rice under cold water until the water runs clear. Soak the rice in water for about 30 mins.',
                          'In a large pot, bring water to a boil. Add salt and the whole spices(bay leaves, cinnamon, cloves, cardamom, and perppercons.',
                          'Drain the soaked rice and add it to the boiling water.',
                          'Cook the rice until it;s 70% done(the grains should still have a slight bite.',
                          'Drain the rice and set aside.',
                          '3.FRY THE ONIONS',
                          'Heat 2 tablespoons of ghee in a large, heavy-bottomed pot or a Dutch oven.',
                          'Add the thinly sliced onions and sauté until they turn golden brown and caramelized.',
                          'Remove half of the fried onions for garnishing later.',
                          '4. COOK THE MARINATED CHICKEN',
                          'In the same pot with the remaining onions and ghee, add the marinated chicken.',
                          'Cook on medium heat, stirring occasionally, until the chicken is tender and the oil starts to separate from the gravy. This should take about 15-20 minutes.',
                            '5. LAYER THE BRIYANI',

                            'Once the chicken is cooked, evenly spread the partially cooked rice over the chicken layer.',
                            'Drizzle the saffron-infused milk over the rice.',
                            'Add the reserved fried onions on top.',
                            'Sprinkle fresh mint and coriander leaves.',
                              
                            'If using, add rose water and kewra water for extra fragrance.',

                            '6. DUM COOKING (STEAM COOKING)',
                            'Seal the Pot: Cover the pot with a tight-fitting lid. You can place a damp cloth or aluminum foil between the lid and the pot to trap the steam.',
                            'Cook on Low Heat: Place the sealed pot on a low flame. Let it cook for about 20-25 minutes. This allows the flavors to meld together and the rice to fully cook.',
                            'Alternatively, you can place the pot in a preheated oven at 180°C (350°F) for the same duration.',
                            '7.SERVING',
                            'Gently fluff the briyani before serving, mixing the layers slightly',
                            'Serve hot, garnished with the reserved fried onions. Accompany with Raita, salad or Mirchi ka Salna as per your references.',
                            'Enjoy your delicious homemade Hyderabadi Chicken Biryani!.'
   ] 

 
    },
    'Lucknowi-mutton' : {
      title : 'LUCKNOWI MUTTON BRIYANI',
      ingredients : ['FOR THE MUTTON MARINADE:',
                     'Mutton : 1 kg (bone-in pieces, preferably leg or shoulder).',
                     'Yougurt : 1 cup',
                     'Ginger-garlic paste : 2 tablespoons',
                     'Fried-onions : 1/2 cup (store-bought or homemade, cripsy and golden',
                     'Red chillie powder : 1 tsp',
                     'Turmeric Powder : 1/2 tsp',
                     'Garam Masala : 1 tsp',
                     'Green cardamom powder : 1/2 tsp',
                     'Coriander powder : 2 tsps',
                     'Lemon Juice :  2 tsp',
                     'Salt : to taste',
                     'Fresh mint leaves : 1/4 cup, chopped',
                     'Fresh coriander leaves : 1/4 cup, chopped',
                     'FOR THE RICE:',
                     'Basmati Rice : 500 grms (long grain)',
                     'Water : As needed',
                     'Salt : to taste',
                     'WHOLE SPICES',
                     'Bay leaves : 2',
                     'Cinnamon sticks : 1- inch piece',
                     'Cloves : 4-5',
                     'Green cardamon pods : 3-4',
                     'Black peppercorns : 6-8',
                     'Shahi Jeera(Caraway seeds) : 1/2 tsp',
                     'FOR THE BRIYANI',
                    'Ghee (Clarified Butter): 5 tablespoons',
                    'Saffron: A pinch, soaked in ¼ cup warm milk',
                    'Kewra Water: 1 tablespoon (optional)',
                    'Rose Water: 1 tablespoon (optional)',
                    'Fresh Mint Leaves: For layering',
                    'Fresh Coriander Leaves: For layering',
                    'Fried Onions: For garnish',
                    'Charcoal and Ghee: For the traditional "dum" smoking method (optional)',
      ],
      instructions: [ 'Prepation method :',
                    '1.MARINATE THE MUTTON:',
                    'In a large bowl, mix yogurt, ginger-garlic paste, fried onions, red-chillie powder, turmeric powder, garam masala, cardamom powder, coriander powder, lemon juice, salt, chopped mint, and coriander leaves',
                    'Add the mutton pieces and coat them well with the marinade.',
                    'Cover the bowl and let the mutton marinate in the refrigerator for at least 4 hours, preferably overnight for deeper flavours.',
                    '2. PREPARE THE RICE:',
                    'Rinse the basmati rice under cold water until the water runs clear. Soak the rice for 30 minutes.',
                    'In a large pot, bring water to boil, add salt and the whole spices (bay leaves, cinnamon, cloves, cardamom, peppercorns, and shahi jeera).',
                    'Add the soaked rice and cook until it is 70% done (al dente but firm).',
                    'Drain the rice and spread it on a tray to cool slightly.',
                    '3.COOK THE MUTTON:',
                    'Heat 3 tablespoons of ghee in a large heavy-bottomed pot or pressure cooker.',
                    'Add the marinated mutton and cook on medium heat for about 15-20 minutes until the mutton is half-cooked and oil separates.',
                    'Add 1 cup of water, cover, and simmer for another 20-25 minutes (or pressure cook for 3-4 whistles).',
                    'Once the mutton is tender and the gravy has thickened, turn off the heat.',
                    '4.LAYER THE BRIYANI:',
                    'In a large biryani pot, spread half of the cooked mutton with its gravy at the bottom.',
                          'Add a layer of the partially cooked rice on top.',
                          'Sprinkle fresh mint leaves, coriander leaves, and fried onions over the rice.',
                          'Drizzle with saffron milk, kewra water, and rose water.',
                          'Repeat with another layer of mutton, followed by a final layer of rice, and garnish similarly.',
                          '5. DUM COOKING (Steam Cooking):',
                          'Seal the Pot: Cover the pot with a tight-fitting lid. To create a steam-tight seal, place a damp cloth or aluminum foil between the lid and the pot.',
                          'Slow Cook: Place the sealed pot on a low flame (or on a heated tawa/griddle) for about 20-25 minutes to allow the biryani to cook in its own steam.',
                          'Alternatively, you can place the sealed pot in a preheated oven at 160°C (320°F) for 30 minutes.',
                          '6. OPTIONAL CHARCOL SMOKING (Dum Pukht Method):',
                          'Heat a piece of charcoal until red hot.',
                          'Place the hot charcoal in a small bowl, and carefully place this bowl in the center of the biryani pot.',
                          'Drizzle some ghee over the charcoal and immediately cover the pot to trap the smoky flavor. Let it sit for 5-10 minutes.',
                          '7. SERVING:',
                          'Once done, gently fluff the biryani layers.',
                          'Serve hot, garnished with fried onions, accompanied by Raita or Salan (spicy curry).',


                                          
                                    
      ]

    }

  
  }
//Add event listener to the left sidebar links

briyaniList.addEventListener('click', (e) => {
  recipeContent.style.color ='hwb(120 28% 71%)';
  recipeContent.style.fontSize = '20px';
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
    recipeContent.innerHTML ="<h1>Recipe not found.</h1>";
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

