c_meats = [
    {
        state: 1,
        name: "ham",
        defaultPath: "images/pickable/meat/ham.png",
        pickedPath: "images/picked/meat/ham.png",
        x: 84,
        y: 205,
    },
    {
        state: 1,
        name: "backon",
        defaultPath: "images/pickable/meat/backon.png",
        pickedPath: "images/picked/meat/backon.png",
        x: 141,
        y: 205,
    },
    {
        state: 1,
        name: "pepperoni",
        defaultPath: "images/pickable/meat/pepperoni.png",
        pickedPath: "images/picked/meat/pepperoni.png",
        x: 71,
        y: 233,
    },
    {
        state: 1,
        name: "sossages",
        defaultPath: "images/pickable/meat/sossages.png",
        pickedPath: "images/picked/meat/sossages.png",
        x: 131,
        y: 233,
    },
    {
        state: 1,
        name: "tuna",
        defaultPath: "images/pickable/meat/tuna.png",
        pickedPath: "images/picked/meat/tuna.png",
        x: 50,
        y: 264,
    },
    {
        state: 1,
        name: "turkey",
        defaultPath: "images/pickable/meat/turkey.png",
        pickedPath: "images/picked/meat/turkey.png",
        x: 118,
        y: 264,
    },
]

c_cheese = [
    {
        state: 1,
        name: "cheese",
        defaultPath: "images/pickable/meat/cheese.png",
        pickedPath: "images/picked/meat/cheese.png",
        x: 210,
        y: 205,
    },
    {
        state: 1,
        name: "cream_cheese",
        defaultPath: "images/pickable/meat/cream_cheese.png",
        pickedPath: "images/picked/meat/creamcheese.png",
        x: 262,
        y: 205,
    },
]

c_first = c_meats.concat(c_cheese)

c_vegs = [
    {
        state: 2,
        name: "cucumbers",
        defaultPath: "images/pickable/vegs/cucumbers.png",
        pickedPath: "images/picked/vegs/cucumbers.png",
        x: 330,
        y: 205,
    },
    {
        state: 2,
        name: "pickles",
        defaultPath: "images/pickable/vegs/pickles.png",
        pickedPath: "images/picked/vegs/pickles.png",
        x: 385,
        y: 205,
    },
    {
        state: 2,
        name: "tomatoes",
        defaultPath: "images/pickable/vegs/tomatoes.png",
        pickedPath: "images/picked/vegs/tomatoes.png",
        x: 335,
        y: 235,
    },
    {
        state: 2,
        name: "olives",
        defaultPath: "images/pickable/vegs/olives.png",
        pickedPath: "images/picked/vegs/olives.png",
        x: 390,
        y: 235,
    },
    {
        state: 2,
        name: "onions",
        defaultPath: "images/pickable/vegs/onion.png",
        pickedPath: "images/picked/vegs/onion.png",
        x: 340,
        y: 265,
    },
    {
        state: 2,
        name: "salad",
        defaultPath: "images/pickable/vegs/salad.png",
        pickedPath: "images/picked/vegs/salad.png",
        x: 400,
        y: 265,
    },
]

c_sauses = [
    {
        state: 2,
        name: "bbq",
        defaultPath: "images/pickable/sauses/bbq_sauce.png",
        pickedPath: "images/picked/sauses/bbq_sauce.png",
        x: 455,
        y: 208,
    },
    {
        state: 2,
        name: "chili",
        defaultPath: "images/pickable/sauses/chili_sauce.png",
        pickedPath: "images/picked/sauses/chili_sauce.png",
        x: 508,
        y: 208,
    },
    {
        state: 2,
        name: "ketchup",
        defaultPath: "images/pickable/sauses/ketchup.png",
        pickedPath: "images/picked/sauses/ketchup.png",
        x: 465,
        y: 235,
    },
    {
        state: 2,
        name: "mayo",
        defaultPath: "images/pickable/sauses/mayonnaise.png",
        pickedPath: "images/picked/sauses/mayonnaise.png",
        x: 525,
        y: 235,
    },
    {
        state: 2,
        name: "mustard",
        defaultPath: "images/pickable/sauses/mustard.png",
        pickedPath: "images/picked/sauses/mustard.png",
        x: 480,
        y: 265,
    },

]

c_ingredients = c_first.concat(c_vegs).concat(c_sauses)