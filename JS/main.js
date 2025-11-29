let recipes = [
    
  
    {
        recipeName: "Molokhia with Chicken",
        recipeDesc: "Egyptian green stew served with rice and chicken broth",
        Servings: 4,
        cookTime: 30,
        prepTime: 15,
        rate: 4.8,
        numOfReviews: 510,
        Calories: 430,
        Protein: 28,
        Carbohydrates: 32,
        Fat: 18,
        Fiber: 4,
        Sodium: 700,
        country: "Egyptian",
        diffeculty: "Easy",
        image: "./images/molokhia.jpg",
        ingredients: [
            "Molokhia leaves",
            "Chicken broth",
            "Garlic",
            "Coriander",
            "Butter",
            "Chicken pieces"
        ],
        instructions: [
            "Boil chicken and keep broth.",
            "Heat broth and add molokhia.",
            "Fry garlic & coriander in butter and add.",
            "Serve with rice and chicken."
        ],
        tips: [
            "Don’t let molokhia boil to avoid sliminess",
            "Use fresh garlic for deeper flavor",
            "Add lemon juice when serving",
            "Use homemade broth"
        ]
    },

    {
        recipeName: "Mahshi Warak Enab",
        recipeDesc: "Grape leaves stuffed with rice, herbs, and spices",
        Servings: 4,
        cookTime: 15,
        prepTime: 45,
        rate: 4.9,
        numOfReviews: 760,
        Calories: 350,
        Protein: 8,
        Carbohydrates: 60,
        Fat: 10,
        Fiber: 5,
        Sodium: 520,
        country: "Egyptian",
        diffeculty: "Intermediate",
        image: "./images/warak enap.jpg",
        ingredients: [
            "Grape leaves",
            "Rice",
            "Tomatoes",
            "Parsley",
            "Dill",
            "Mint"
        ],
        instructions: [
            "Mix rice with chopped herbs.",
            "Stuff grape leaves and roll tightly.",
            "Arrange in pot and add broth.",
            "Cook on low heat until tender."
        ],
        tips: [
            "Roll leaves tightly for best texture",
            "Use mild heat to avoid burning",
            "Add lemon slices on top",
            "Let it rest before serving"
        ]
    },

    {
        recipeName: "Chicken Alfredo Pasta",
        recipeDesc: "Creamy pasta with tender chicken and parmesan sauce",
        Servings: 3,
        cookTime: 25,
        prepTime: 15,
        rate: 4.7,
        numOfReviews: 312,
        Calories: 720,
        Protein: 45,
        Carbohydrates: 62,
        Fat: 32,
        Fiber: 4,
        Sodium: 850,
        country: "Italian-American",
        diffeculty: "Easy",
        image: "./images/pasta.jpg",
        ingredients: [
            "300g fettuccine pasta",
            "2 chicken breasts, sliced",
            "1 cup heavy cream",
            "1/2 cup parmesan cheese",
            "2 garlic cloves",
            "Butter",
            "Salt & pepper"
        ],
        instructions: [
            "Cook pasta according to package instructions.",
            "Sauté chicken in butter until golden.",
            "Add garlic then heavy cream and simmer.",
            "Mix pasta with sauce and add parmesan.",
            "Serve hot with parsley."
        ],
        tips: [
            "Use fresh parmesan for best flavor",
            "Don’t overcook the pasta",
            "Add mushrooms for extra taste",
            "Use pasta water to adjust sauce thickness"
        ]
    },

    {
        recipeName: "Beef Taco Wraps",
        recipeDesc: "Mexican spiced beef wrapped in soft tortillas",
        Servings: 4,
        cookTime: 20,
        prepTime: 10,
        rate: 4.8,
        numOfReviews: 540,
        Calories: 480,
        Protein: 30,
        Carbohydrates: 44,
        Fat: 20,
        Fiber: 5,
        Sodium: 640,
        country: "Mexican",
        diffeculty: "Easy",
        image: "./images/Cheesy Beef Wrap.jpg",
        ingredients: [
            "8 tortilla wraps",
            "400g minced beef",
            "Taco seasoning",
            "Lettuce",
            "Cheddar cheese",
            "Tomatoes"
        ],
        instructions: [
            "Cook beef with taco seasoning.",
            "Warm tortillas.",
            "Fill with beef, lettuce, tomato, and cheese.",
            "Fold and serve."
        ],
        tips: [
            "Add sour cream for creamy texture",
            "Use fresh tortillas for better wrapping",
            "Add jalapeños for heat",
            "Toast tortillas lightly for better flavor"
        ]
    },

    {
        recipeName: "Shrimp Fried Rice",
        recipeDesc: "Classic Asian rice stir-fried with shrimp and veggies",
        Servings: 3,
        cookTime: 40,
        prepTime: 10,
        rate: 4.5,
        numOfReviews: 289,
        Calories: 540,
        Protein: 29,
        Carbohydrates: 60,
        Fat: 18,
        Fiber: 3,
        Sodium: 900,
        country: "Chinese",
        diffeculty: "Easy",
        image: "./images/recipe10.jpg",
        ingredients: [
            "2 cups cooked rice",
            "200g shrimp",
            "2 eggs",
            "Soy sauce",
            "Green peas",
            "Carrots"
        ],
        instructions: [
            "Cook shrimp until pink.",
            "Scramble eggs and mix.",
            "Add rice, veggies, and soy sauce.",
            "Stir-fry for 5 minutes and serve."
        ],
        tips: [
            "Use cold rice for best texture",
            "Don’t overcook the shrimp",
            "Add sesame oil for aroma",
            "Use high heat for best stir-fry results"
        ]
    },

    {
        recipeName: "Butter Chicken",
        recipeDesc: "Creamy Indian chicken curry with aromatic spices",
        Servings: 4,
        cookTime: 35,
        prepTime: 10,
        rate: 4.9,
        numOfReviews: 880,
        Calories: 650,
        Protein: 40,
        Carbohydrates: 32,
        Fat: 40,
        Fiber: 4,
        Sodium: 780,
        country: "Indian",
        diffeculty: "Intermediate",
        image: "./images/Butter Chicken.jpg",
        ingredients: [
            "500g chicken breast",
            "Tomato puree",
            "Heavy cream",
            "Butter",
            "Garam masala",
            "Garlic & ginger"
        ],
        instructions: [
            "Marinate chicken with spices.",
            "Cook in butter.",
            "Add tomato puree and simmer.",
            "Add cream and serve with rice."
        ],
        tips: [
            "Toast spices for deeper flavor",
            "Use ghee for richer taste",
            "Marinate overnight for tenderness",
            "Simmer on low heat for smooth sauce"
        ]
    },

    {
        recipeName: "Koshari",
        recipeDesc: "Egyptian national dish made of rice, pasta, lentils and crispy onions",
        Servings: 4,
        cookTime: 45,
        prepTime: 20,
        rate: 4.7,
        numOfReviews: 760,
        Calories: 590,
        Protein: 18,
        Carbohydrates: 96,
        Fat: 8,
        Fiber: 9,
        Sodium: 540,
        country: "Egyptian",
        diffeculty: "Intermediate",
        image: "./images/Koshari.jpg",
        ingredients: [
            "Rice",
            "Brown lentils",
            "Macaroni",
            "Chickpeas",
            "Fried onions",
            "Tomato sauce"
        ],
        instructions: [
            "Cook lentils, rice, and pasta separately.",
            "Prepare tomato garlic sauce.",
            "Layer rice, pasta, lentils, and chickpeas.",
            "Top with fried onions and sauce."
        ],
        tips: [
            "Cook lentils al dente",
            "Use crispy onions for authentic taste",
            "Add cumin to sauce for aroma",
            "Use chili oil for spice lovers"
        ]
    },

    {
        recipeName: "Chicken Kabsa",
        recipeDesc: "Traditional Saudi rice dish cooked with spiced chicken and tomato broth",
        Servings: 4,
        cookTime: 30,
        prepTime: 20,
        rate: 4.8,
        numOfReviews: 950,
        Calories: 650,
        Protein: 42,
        Carbohydrates: 78,
        Fat: 18,
        Fiber: 4,
        Sodium: 720,
        country: "Saudi Arabian",
        diffeculty: "Intermediate",
        image: "./images/kapsa.jpg",
        ingredients: [
            "Chicken pieces",
            "Basmati rice",
            "Tomatoes",
            "Onion",
            "Garlic",
            "Kabsa spices",
            "Carrots",
            "Chicken broth"
        ],
        instructions: [
            "Sauté onions, garlic, and spices.",
            "Add chicken and cook until browned.",
            "Add tomatoes and broth.",
            "Add rice and simmer until cooked.",
            "Serve with nuts and raisins on top."
        ],
        tips: [
            "Use basmati rice for authentic texture",
            "Don't over-stir the rice",
            "Add cardamom and cloves for aroma",
            "Garnish with toasted almonds"
        ]
    },    

    {
        recipeName: "Egyptian Hawawshi",
        recipeDesc: "Crispy Arabic bread filled with spiced minced beef",
        Servings: 4,
        cookTime: 25,
        prepTime: 15,
        rate: 4.6,
        numOfReviews: 410,
        Calories: 520,
        Protein: 28,
        Carbohydrates: 42,
        Fat: 26,
        Fiber: 3,
        Sodium: 780,
        country: "Egyptian",
        diffeculty: "Easy",
        image: "./images/hawawshi.jpg",
        ingredients: [
            "Arabic bread",
            "Minced beef",
            "Onion",
            "Bell pepper",
            "Spices"
        ],
        instructions: [
            "Mix beef with vegetables and spices.",
            "Stuff the bread.",
            "Bake until crispy.",
            "Serve hot."
        ],
        tips: [
            "Use fatty beef for juiciness",
            "Brush bread with oil for crunch",
            "Add chili for spicy flavor",
            "Let it rest before slicing"
        ]
    },

    {
        recipeName: "Spaghetti Carbonara",
        recipeDesc: "Classic Italian pasta with eggs, cheese, and beef bacon",
        Servings: 2,
        cookTime: 15,
        prepTime: 20,
        rate: 4.7,
        numOfReviews: 500,
        Calories: 690,
        Protein: 32,
        Carbohydrates: 72,
        Fat: 32,
        Fiber: 3,
        Sodium: 750,
        country: "Italian",
        diffeculty: "Intermediate",
        image: "./images/recipe10.jpg",
        ingredients: [
            "200g spaghetti",
            "2 eggs",
            "Parmesan cheese",
            "Beef bacon",
            "Black pepper"
        ],
        instructions: [
            "Cook spaghetti.",
            "Fry bacon.",
            "Mix eggs + cheese.",
            "Combine pasta off-heat to avoid scrambling.",
            "Serve with pepper."
        ],
        tips: [
            "Use lots of pepper — it's key flavor",
            "Add egg mixture off heat",
            "Use pasta water to thin sauce",
            "Crisp the bacon well before mixing"
        ]
    },
];
showRandomRecipe()
function showRandomRecipe(){
    let randomrecipe = getRandomRecipe();
    let  warning= document.getElementById("warningOver45");
    ((randomrecipe.prepTime + randomrecipe.cookTime) <= 45 )? warning.classList.add("d-none"):warning.classList.remove("d-none");
  {
    let box = "";
    for (let index = 0; index < randomrecipe.ingredients.length; index++) {
        box += `
        <li class=" ps-0 d-flex align-items-center column-gap-1"> 
        <span class="index d-flex justify-content-center align-items-center fw-semibold rounded-circle text-white">${index+1}</span>
        <p class="p-1">${randomrecipe.ingredients[index]}</p>
        </li>`
    }
    document.getElementById("ingredientsUl").innerHTML = box ;
  }
  {
    let box = "";
    for (let index = 0; index < randomrecipe.instructions.length; index++) {
        box += `
            <div class="instruction-step d-flex align-items-center column-gap-1">
                <div class="step-number">${index+1}</div>
                <div class="step-text"><p class="lead fw-semibold">${randomrecipe.instructions[index]}</p></div>
             </div>
        `
    }
    document.getElementById("instructions").innerHTML = box ;
  }
  {
    let box = "";
    for (let index = 0; index < randomrecipe.tips.length; index++) {
        box += `
            <div class="custom-tip-box p-4 rounded-3 tip d-flex align-items-center mb-4">
                <span class="tip-icon me-2">
                    <i class="fa-solid fa-circle-check fs-4"></i>
                </span>
                <p class="mb-0 lead fw-semibold fs-6">${randomrecipe.tips[index]}</p>
            </div>
        `
    }
    document.getElementById("tipsConatiner").innerHTML = box ;
  }
}
function getRandomRecipe(){
    let randomrecipe = recipes[Math.floor(Math.random() * 10)];
    document.getElementById("rate").innerHTML = randomrecipe.rate;
    document.getElementById("numOfRev").innerHTML = randomrecipe.numOfReviews;
    document.getElementById("prepTime").innerHTML = randomrecipe.prepTime;
    document.getElementById("cookTime").innerHTML = randomrecipe.cookTime;
    document.getElementById("servings").innerHTML = randomrecipe.Servings;
    document.getElementById("calories").innerHTML = randomrecipe.Calories;
    document.getElementById("fat").innerHTML = randomrecipe.Fat;
    document.getElementById("carbohydrates").innerHTML = randomrecipe.Carbohydrates;
    document.getElementById("protein").innerHTML = randomrecipe.Protein;
    document.getElementById("sodium").innerHTML = randomrecipe.Sodium;
    document.getElementById("fiber").innerHTML = randomrecipe.Fiber;
    document.getElementById("recipeName").innerHTML = randomrecipe.recipeName;
    document.getElementById("recipeDesc").innerHTML = randomrecipe.recipeDesc;
    document.getElementById("country").innerHTML = randomrecipe.country;
    document.getElementById("diff").innerHTML = randomrecipe.diffeculty;
    document.getElementById("recipeImg").innerHTML =`
               <img src="${randomrecipe.image}" class="w-100 h-100 img-fluid" alt="rcipe">
    `;
    return randomrecipe;
}