export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchResList: document.querySelector('.results__list'),
    searchRes: document.querySelector('.results'),
    searchResPages: document.querySelector('.results__pages'),
    recipe: document.querySelector('.recipe'),
    shopping: document.querySelector('.shopping__list'),
    likesMenu: document.querySelector('.likes__field'),
    likesList: document.querySelector('.likes__list')
};

export const elementStrings = {
    loader: 'loader'
};

export const renderLoader = parent => {
    const loader = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);

    if (loader) {
        loader.parentElement.removeChild(loader);
    }
};



export const localRec = {
    pizza: [
        {
            f2f_url: "http://food2fork.com/view/47746",
            image_url: "http://static.food2fork.com/best_pizza_dough_recipe1b20.jpg",
            publisher: "101 Cookbooks",
            publisher_url: "http://www.101cookbooks.com",
            recipe_id: "47746",
            social_rank: 100,
            source_url: "http://www.101cookbooks.com/archives/001199.html",
            title: "Best Pizza Dough Ever",
        },
        {
            f2f_url: "http://food2fork.com/view/46956",
            image_url: "http://static.food2fork.com/fruitpizza9a19.jpg",
            publisher: "The Pioneer Woman",
            publisher_url: "http://thepioneerwoman.com",
            recipe_id: "46956",
            social_rank: 100,
            source_url: "http://thepioneerwoman.com/cooking/2012/01/fruit-pizza/",
            title: "Deep Dish Fruit Pizza",
        },
        {
            f2f_url: "http://food2fork.com/view/35477",
            image_url: "http://static.food2fork.com/Pizza2BDip2B12B500c4c0a26c.jpg",
            publisher: "Closet Cooking",
            publisher_url: "http://closetcooking.com",
            recipe_id: "35477",
            social_rank: 99.99999999999994,
            source_url: "http://www.closetcooking.com/2011/03/pizza-dip.html",
            title: "Pizza Dip",
        },
        {
            f2f_url: "http://food2fork.com/view/41470",
            image_url: "http://static.food2fork.com/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg",
            publisher: "Closet Cooking",
            publisher_url: "http://closetcooking.com",
            recipe_id: "41470",
            social_rank: 99.9999999999994,
            source_url: "http://www.closetcooking.com/2013/02/cauliflower-pizza-crust-with-bbq.html",
            title: "Cauliflower Pizza Crust (with BBQ Chicken Pizza)",
        },
        {
            f2f_url: "http://food2fork.com/view/35478",
            image_url: "http://static.food2fork.com/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg",
            publisher: "Closet Cooking",
            publisher_url: "http://closetcooking.com",
            recipe_id: "35478",
            social_rank: 99.99999999999835,
            source_url: "http://www.closetcooking.com/2012/11/pizza-quesadillas-aka-pizzadillas.html",
            title: "Pizza Quesadillas (aka Pizzadillas)",
        },
        {
            f2f_url: "http://food2fork.com/view/54454",
            image_url: "http://static.food2fork.com/sweetpotatokalepizza2c6db.jpg",
            publisher: "Two Peas and Their Pod",
            publisher_url: "http://www.twopeasandtheirpod.com",
            recipe_id: "54454",
            social_rank: 99.9999999991673,
            source_url: "http://www.twopeasandtheirpod.com/sweet-potato-kale-pizza-with-rosemary-red-onion/",
            title: "Sweet Potato Kale Pizza with Rosemary & Red Onion"
        },
        {
            f2f_url: "http://food2fork.com/view/2ec050",
            image_url: "http://static.food2fork.com/PizzaDip21of14f05.jpg",
            publisher: "My Baking Addiction",
            publisher_url: "http://www.mybakingaddiction.com",
            recipe_id: "2ec050",
            social_rank: 99.99999999826605,
            source_url: "http://www.mybakingaddiction.com/pizza-dip/",
            title: "Pizza Dip"
        },
        {
            f2f_url: "http://food2fork.com/view/6fab1c",
            image_url: "http://static.food2fork.com/pizza3464.jpg",
            publisher: "The Pioneer Woman",
            publisher_url: "http://thepioneerwoman.com",
            recipe_id: "6fab1c",
            social_rank: 99.99999999760887,
            source_url: "http://thepioneerwoman.com/cooking/2013/04/pizza-potato-skins/",
            title: "Pizza Potato Skins"
        },
        {
            f2f_url: "http://food2fork.com/view/49346",
            image_url: "http://static.food2fork.com/nokneadpizzadoughlahey6461467.jpg",
            publisher: "Bon Appetit",
            publisher_url: "http://www.bonappetit.com",
            recipe_id: "49346",
            social_rank: 99.99999999743466,
            source_url: "http://www.bonappetit.com/recipes/2012/03/no-knead-pizza-dough",
            title: "No-Knead Pizza Dough"
        },
        {
            f2f_url: "http://food2fork.com/view/36453",
            image_url: "http://static.food2fork.com/pizza292x2007a259a79.jpg",
            publisher: "Simply Recipes",
            publisher_url: "http://simplyrecipes.com",
            recipe_id: "36453",
            social_rank: 99.99999998833789,
            source_url: "http://www.simplyrecipes.com/recipes/homemade_pizza/",
            title: "Homemade Pizza"
        },
        {
            f2f_url: "http://food2fork.com/view/35626",
            image_url: "http://static.food2fork.com/Taco2BQuesadilla2BPizza2B5002B4417a4755e35.jpg",
            publisher: "Closet Cooking",
            publisher_url: "http://closetcooking.com",
            recipe_id: "35626",
            social_rank: 99.99999998319973,
            source_url: "http://www.closetcooking.com/2012/08/taco-quesadilla-pizza.html",
            title: "Taco Quesadilla Pizzas"
        }
    ],
    pasta: [
        {
            f2f_url: "http://food2fork.com/view/47025",
            image_url: "http://static.food2fork.com/pestoa0e7.jpg",
            publisher: "The Pioneer Woman",
            publisher_url: "http://thepioneerwoman.com",
            recipe_id: "47025",
            social_rank: 100,
            source_url: "http://thepioneerwoman.com/cooking/2011/06/pasta-with-pesto-cream-sauce/",
            title: "Pasta with Pesto Cream Sauce"
        },
        {
            f2f_url: "http://food2fork.com/view/8f3e73",
            image_url: "http://static.food2fork.com/387114468_aafd1be3404a2f.jpg",
            publisher: "The Pioneer Woman",
            publisher_url: "http://thepioneerwoman.com",
            recipe_id: "8f3e73",
            social_rank: 100,
            source_url: "http://thepioneerwoman.com/cooking/2007/06/the_best_lasagn/",
            title: "The Best Lasagna Ever"
        },
        {
            f2f_url: "http://food2fork.com/view/47032",
            image_url: "http://static.food2fork.com/scampibf5a.jpg",
            publisher: "The Pioneer Woman",
            publisher_url: "http://thepioneerwoman.com",
            recipe_id: "47032",
            social_rank: 100,
            source_url: "http://thepioneerwoman.com/cooking/2011/04/16-minute-meal-shrimp-scampi/",
            title: "Shrimp Scampi"
        },
        {
            f2f_url: "http://food2fork.com/view/54426",
            image_url: "http://static.food2fork.com/creamyavocadopasta607e.jpg",
            publisher: "Two Peas and Their Pod",
            publisher_url: "http://www.twopeasandtheirpod.com",
            recipe_id: "54426",
            social_rank: 99.99999999999989,
            source_url: "http://www.twopeasandtheirpod.com/creamy-avocado-pasta/",
            title: "Creamy Avocado Pasta"
        },
        {
            f2f_url: "http://food2fork.com/view/47275",
            image_url: "http://static.food2fork.com/pastaallavodkaa870.jpg",
            publisher: "The Pioneer Woman",
            publisher_url: "http://thepioneerwoman.com",
            recipe_id: "47275",
            social_rank: 99.99999999999636,
            source_url: "http://thepioneerwoman.com/cooking/2008/12/friday-night-dinner-pasta-alla-vodka/",
            title: "Pasta Alla Vodka"
        },
        {
            f2f_url: "http://food2fork.com/view/46943",
            image_url: "http://static.food2fork.com/seafoodpasta5075.jpg",
            publisher: "The Pioneer Woman",
            publisher_url: "http://thepioneerwoman.com",
            recipe_id: "46943",
            social_rank: 99.99999999999329,
            source_url: "http://thepioneerwoman.com/cooking/2012/03/seafood-pasta/",
            title: "Seafood Pasta"
        }
    ]
};

