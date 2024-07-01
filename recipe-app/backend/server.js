async function initializeRecipes() {
    const count = await Recipe.countDocuments();
    if (count === 0) {
        const sampleRecipes = [
            {
                name: 'Margherita Pizza',
                ingredients: ['Tomato', 'Cheese', 'Basil'],
                image: 'https://example.com/margherita.jpg',
                procedure: 'Spread the tomato sauce on the pizza base. Add cheese and basil leaves. Bake in the oven.',
                cuisine: 'Italian',
                preparationTime: 20,
                dietaryRestrictions: ['Vegetarian']
            },
            {
                name: 'Chicken Curry',
                ingredients: ['Chicken', 'Onion', 'Garlic', 'Tomato', 'Spices'],
                image: 'https://example.com/chickencurry.jpg',
                procedure: 'Cook the chicken with onions, garlic, tomatoes, and spices. Serve with rice.',
                cuisine: 'Indian',
                preparationTime: 40,
                dietaryRestrictions: ['Gluten-Free']
            },
            {
                name: 'Beef Tacos',
                ingredients: ['Beef', 'Taco Shells', 'Lettuce', 'Cheese', 'Salsa'],
                image: 'https://example.com/beeftacos.jpg',
                procedure: 'Cook the beef and assemble the tacos with lettuce, cheese, and salsa.',
                cuisine: 'Mexican',
                preparationTime: 30,
                dietaryRestrictions: []
            },
            {
                name: 'Sushi',
                ingredients: ['Rice', 'Nori', 'Fish', 'Soy Sauce'],
                image: 'https://example.com/sushi.jpg',
                procedure: 'Prepare the rice and roll it with nori and fish. Serve with soy sauce.',
                cuisine: 'Japanese',
                preparationTime: 50,
                dietaryRestrictions: ['Gluten-Free']
            },
            {
                name: 'Caesar Salad',
                ingredients: ['Lettuce', 'Croutons', 'Parmesan', 'Caesar Dressing'],
                image: 'https://example.com/caesarsalad.jpg',
                procedure: 'Toss the lettuce with croutons, parmesan, and Caesar dressing.',
                cuisine: 'American',
                preparationTime: 15,
                dietaryRestrictions: ['Vegetarian']
            },
            {
                name: 'Pancakes',
                ingredients: ['Flour', 'Eggs', 'Milk', 'Butter', 'Maple Syrup'],
                image: 'https://example.com/pancakes.jpg',
                procedure: 'Mix the ingredients and cook on a griddle. Serve with maple syrup.',
                cuisine: 'American',
                preparationTime: 20,
                dietaryRestrictions: []
            },
            {
                name: 'Spaghetti Carbonara',
                ingredients: ['Spaghetti', 'Eggs', 'Bacon', 'Parmesan', 'Pepper'],
                image: 'https://example.com/carbonara.jpg',
                procedure: 'Cook the spaghetti and mix with eggs, bacon, and parmesan. Season with pepper.',
                cuisine: 'Italian',
                preparationTime: 25,
                dietaryRestrictions: []
            },
            {
                name: 'Pad Thai',
                ingredients: ['Rice Noodles', 'Chicken', 'Peanuts', 'Bean Sprouts', 'Lime'],
                image: 'https://example.com/padthai.jpg',
                procedure: 'Cook the noodles and stir-fry with chicken, peanuts, bean sprouts, and lime.',
                cuisine: 'Thai',
                preparationTime: 30,
                dietaryRestrictions: ['Gluten-Free']
            },
            {
                name: 'Vegetable Stir Fry',
                ingredients: ['Broccoli', 'Carrot', 'Bell Pepper', 'Soy Sauce', 'Garlic'],
                image: 'https://example.com/vegetablestirfry.jpg',
                procedure: 'Stir-fry the vegetables with soy sauce and garlic.',
                cuisine: 'Chinese',
                preparationTime: 20,
                dietaryRestrictions: ['Vegetarian', 'Vegan']
            },
            {
                name: 'Hamburger',
                ingredients: ['Beef Patty', 'Bun', 'Lettuce', 'Tomato', 'Cheese', 'Onion'],
                image: 'https://example.com/hamburger.jpg',
                procedure: 'Grill the patty and assemble the burger with lettuce, tomato, cheese, and onion.',
                cuisine: 'American',
                preparationTime: 25,
                dietaryRestrictions: []
            },
            {
                name: 'Mushroom Risotto',
                ingredients: ['Rice', 'Mushrooms', 'Onion', 'Parmesan', 'Vegetable Broth'],
                image: 'https://example.com/mushroomrisotto.jpg',
                procedure: 'Cook the rice with mushrooms and onion, adding vegetable broth gradually. Stir in parmesan.',
                cuisine: 'Italian',
                preparationTime: 45,
                dietaryRestrictions: ['Vegetarian']
            },
            {
                name: 'Falafel',
                ingredients: ['Chickpeas', 'Onion', 'Garlic', 'Parsley', 'Flour'],
                image: 'https://example.com/falafel.jpg',
                procedure: 'Blend chickpeas with onion, garlic, parsley, and flour. Form into balls and fry.',
                cuisine: 'Middle Eastern',
                preparationTime: 30,
                dietaryRestrictions: ['Vegan', 'Gluten-Free']
            },
            {
                name: 'Greek Salad',
                ingredients: ['Tomato', 'Cucumber', 'Onion', 'Feta', 'Olives'],
                image: 'https://example.com/greeksalad.jpg',
                procedure: 'Chop the vegetables and mix with feta and olives.',
                cuisine: 'Greek',
                preparationTime: 15,
                dietaryRestrictions: ['Vegetarian', 'Gluten-Free']
            },
            {
                name: 'Butter Chicken',
                ingredients: ['Chicken', 'Tomato', 'Cream', 'Butter', 'Spices'],
                image: 'https://example.com/butterchicken.jpg',
                procedure: 'Cook the chicken with tomato, cream, butter, and spices.',
                cuisine: 'Indian',
                preparationTime: 40,
                dietaryRestrictions: ['Gluten-Free']
            },
            {
                name: 'Tom Yum Soup',
                ingredients: ['Shrimp', 'Mushrooms', 'Tomato', 'Lemongrass', 'Lime'],
                image: 'https://example.com/tomyum.jpg',
                procedure: 'Cook the shrimp with mushrooms, tomato, lemongrass, and lime.',
                cuisine: 'Thai',
                preparationTime: 30,
                dietaryRestrictions: ['Gluten-Free']
            },
            {
                name: 'Chocolate Cake',
                ingredients: ['Flour', 'Cocoa', 'Sugar', 'Eggs', 'Butter'],
                image: 'https://example.com/chocolatecake.jpg',
                procedure: 'Mix the ingredients and bake in the oven.',
                cuisine: 'American',
                preparationTime: 60,
                dietaryRestrictions: []
            },
            {
                name: 'Ratatouille',
                ingredients: ['Zucchini', 'Eggplant', 'Tomato', 'Bell Pepper', 'Onion'],
                image: 'https://example.com/ratatouille.jpg',
                procedure: 'Slice the vegetables and bake in the oven with olive oil and herbs.',
                cuisine: 'French',
                preparationTime: 50,
                dietaryRestrictions: ['Vegan', 'Gluten-Free']
            },
            {
                name: 'Beef Stroganoff',
                ingredients: ['Beef', 'Mushrooms', 'Onion', 'Sour Cream', 'Butter'],
                image: 'https://example.com/beefstroganoff.jpg',
                procedure: 'Cook the beef with mushrooms and onion, then stir in sour cream and butter.',
                cuisine: 'Russian',
                preparationTime: 35,
                dietaryRestrictions: []
            },
            {
                name: 'Vegetable Soup',
                ingredients: ['Carrot', 'Potato', 'Celery', 'Tomato', 'Onion'],
                image: 'https://example.com/vegetablesoup.jpg',
                procedure: 'Cook the vegetables in a broth until tender.',
                cuisine: 'American',
                preparationTime: 30,
                dietaryRestrictions: ['Vegetarian', 'Vegan']
            },
            {
                name: 'Fish Tacos',
                ingredients: ['Fish', 'Taco Shells', 'Cabbage', 'Salsa', 'Lime'],
                image: 'https://example.com/fishtacos.jpg',
                procedure: 'Cook the fish and assemble the tacos with cabbage, salsa, and lime.',
                cuisine: 'Mexican',
                preparationTime: 25,
                dietaryRestrictions: ['Gluten-Free']
            }

        ];

        await Recipe.insertMany(sampleRecipes);
        console.log('Sample recipes added to the database');
    }
}
