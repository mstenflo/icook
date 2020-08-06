# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Comment.destroy_all
Recipe.destroy_all
Step.destroy_all
User.destroy_all

demo = User.create({
    username: 'demoUser',
    password: 'demodemo',
    email: 'demo@user.com'
})

Martin = User.create({
    username: 'martin',
    password: 'martin',
    email: 'stenflo@gmail.com'
})

10.times do 
    User.create(username: Faker::Name.first_name, email: Faker::Internet.email, password: 'password')
end

r1 = Recipe.create!(
    title: 'Broccoli and cream cheese soup',
    category: 'Soup',
    body: 'The key to this delicious and creamy soup is cream cheese! Oh so good!',
    ingredients: ['1 head broccoli, but into florets', '2 tablespoons salted butter', '1 onion finely chopped', '1 clove garlic, minced', '150mL vegetable stock', '300mL full fat milk', '300g cream cheese', 'salt and pepper, to taste', '2 tablespoons chopped fresh chervil', '55g grated Parmesan cheese'],
    author_id: User.order('RANDOM()').first.id,
    id: 1,
    photo_url: 'https://icook-seeds.s3-us-west-1.amazonaws.com/Broccoli-Cheese-Soup-Recipe.jpg'
)

# file = open('https://icook-seeds.s3-us-west-1.amazonaws.com/Broccoli-Cheese-Soup-Recipe.jpg')
# r1.photo.attach(io: file, filename: 'Broccoli-Cheese-Soup-Recipe.jpg')

r1Steps = Step.create!(
    [{
        title: "Steam the Broccoli",
        body: "Steam the broccoli over a pan of boiling water for 5 minutes until just tender. Remove from the heat and set aside.",
        recipe_id: 1,
    }, {
        title: "Cook the soup",
        body: "In a saucepan over a medium heat, melt the butter and add the onion and garlic. Add the broccoli and stir to coat in the butter. Add the stock and milk and bring to the boil before immediately reducing the heat to simmer gently for 20 minutes. Add the cream cheese and stir until melted.",
        recipe_id: 1,
    }, {
        title: "Puree the Broccoli",
        body: "Puree the soup until well blended using a hand held liquidiser. Season and add the fresh chervil. Serve sprinkled with Parmesan cheese.",
        recipe_id: 1,
    }]
)

r2 = Recipe.create!(
    title: 'Enchilada Meatballs',
    category: 'Appetizer',
    body: "These are a tasty change from the usual since they use cornbread crumbs instead of crackers or regular bread. They're always a hit at parties! A friend shared this recipe with me ages ago and I've tweaked it to come up with this.",
    ingredients: ['2 cups crumbled cornbread', '1 (10 ounce) can enchilada sauce, divided', '1/2 teaspoon salt', '1 1/2 pounds ground beef chuck', '1 (10 ounce) can tomato sauce', '1 cup shredded Mexican cheese blend, divided'],
    author_id: User.order('RANDOM()').first.id,
    id: 2,
    photo_url: 'https://icook-seeds.s3-us-west-1.amazonaws.com/enchilada-meatballs.jpg'
)

# file = open('https://icook-seeds.s3-us-west-1.amazonaws.com/enchilada-meatballs.jpg')
# r2.photo.attach(io: file, filename: 'enchilada-meatballs.jpg')

r2Steps = Step.create!(
    [{
        title: "Preheat the oven",
        body: "Preheat the oven to 350 degrees F (175 degrees C).",
        recipe_id: 2,
    }, {
        title: "Combine Ingredients",
        body: "In a large bowl, combine the cornbread, half of the enchilada sauce, half of the cheese, and the salt. Crumble the beef into the mixture, and blend well using your hands. Shape meat into 1 inch balls, and place on a 10x15 inch jellyroll pan, or any cookie sheet with sides to catch the grease.",
        recipe_id: 2,
    }, {
        title: "Bake",
        body: "Bake for 18 to 22 minutes in the preheated oven, until the meat is cooked through.",
        recipe_id: 2,
    }, {
        title: "Prepare sauce",
        body: "While the meatballs are cooking, warm the tomato sauce and remaining enchilada sauce in a saucepan. Remove the meatballs from the pan using a slotted spoon, and place in a serving dish. Pour the heated sauce over them, and sprinkle the rest of the cheese on top. Provide toothpicks for serving.",
        recipe_id: 2,
    }]
)

r3 = Recipe.create!(
    title: 'Baked Kale Chips',
    category: 'Appetizer',
    body: 'These are a low calorie nutritious snack. Like potato chips, you cannot stop at just eating one. They are great for parties and a good conversation topic.',
    ingredients: ['1 bunch kale', '1 tablespoon olive oil', '1 teaspoon seasoned salt'],
    author_id: User.order('RANDOM()').first.id,
    id: 3,
    photo_url: 'https://icook-seeds.s3-us-west-1.amazonaws.com/baked-kale-chips.jpg'
)

# file = open('https://icook-seeds.s3-us-west-1.amazonaws.com/baked-kale-chips.jpg')
# r3.photo.attach(io: file, filename: 'baked-kale-chips.jpg')

r3Steps = Step.create!(
    [{
        title: "Preheat oven",
        body: "Preheat an oven to 350 degrees F (175 degrees C). Line a non insulated cookie sheet with parchment paper.",
        recipe_id: 3,
    }, {
        title: "Prepare kale",
        body: "With a knife or kitchen shears carefully remove the leaves from the thick stems and tear into bite size pieces. Wash and thoroughly dry kale with a salad spinner. Drizzle kale with olive oil and sprinkle with seasoning salt.",
        recipe_id: 3,
    }, {
        title: "Bake",
        body: "Bake until the edges brown but are not burnt, 10 to 15 minutes.",
        recipe_id: 3,
    }]
)

r4 = Recipe.create!(
    title: 'Shakshuka',
    category: 'Main Dish',
    body: 'Shakshuka is one of Israelis’ most loved foods. The dish, which was brought to Israel by Jewish immigrants from North Africa, traditionally consists of spiced stewed tomatoes topped with poached eggs.
            Now a staple on the menus of coffee shops and restaurants around the country, modern interpretations augment the sauce with all sorts of vegetables, cheeses or meats, including eggplant, kale, feta or sausage. Some variations replace the tomatoes entirely – one popular version substitutes a spinach-cream sauce.
            This shakshuka hews to the traditional. This recipe will give you a lovely shakshuka, rich in flavor. Once you’ve mastered the basic, you can dress it up with additions of your choice.',
    ingredients: ['1 tbsp. olive oil', '1 small onion, chopped (3/4 cup)', '1 medium red pepper, chopped (1 cup)', '6 garlic cloves, crushed', '3 tablespoons tomato paste (50 grams / 2 oz)', '5 medium tomatoes, chopped (800 grams / 28 oz)', '2 tablespoons paprika', 'pinch cumin (1/8 teaspoon)', '1 teaspoon salt', '1/2 cup water', '4 eggs', 'chopped parsley', 'hearty bread for serving'],
    author_id: User.order('RANDOM()').first.id,
    id: 4,
    photo_url: 'https://icook-seeds.s3-us-west-1.amazonaws.com/shakshuka.jpg'
)

# file = open('https://icook-seeds.s3-us-west-1.amazonaws.com/shakshuka.jpg')
# r4.photo.attach(io: file, filename: 'shakshuka.jpg')

r4Steps = Step.create!(
    [{
        title: "Fry Onions and Garlic",
        body: "Pour about a tablespoon of olive oil into a deep frying pan or saute pan on medium heat. Add onions and let fry for a few minutes, until lightly softened. Stir occasionally. Add red pepper and fry until lightly softened. Add garlic and fry until lightly browned.",
        recipe_id: 4,
    }, {
        title: "Add tomatoes",
        body: "Add tomato paste to the pan and stir, letting it brown slightly. Add chopped tomatoes, followed by water, paprika, cumin and salt. Stir until all the ingredients are well integrated, and then cover and let simmer on a low flame for about 10 minutes, until tomatoes are softened and beginning to fall apart. Lift the lid and stir occasionally.",
        recipe_id: 4,
    }, {
        title: "Adjust Seasoning",
        body: "Once tomatoes are cooked, remove lid and stir again. Taste and adjust seasonings. Make sure the sauce is more or less level in the pan.",
        recipe_id: 4,
    }, {
        title: "Add Eggs",
        body: "Add the eggs: Using a spoon, make a well in the surface of the sauce. Crack an egg into the well. Using the spoon, arrange the whites and surrounding sauce as necessary so that the egg yolk is below the surface of the sauce. Repeat for the remaining eggs.",
        recipe_id: 4,
    }, {
        title: "Let it Simmer",
        body: "Cover and let simmer on a low flame until the egg whites are set, between 5-8 more minutes. The yolks should be covered with an opaque film when done.",
        recipe_id: 4,
    }, {
        title: "Remove from Heat and Serve",
        body: "Remove the lid, sprinkle with chopped parsley and serve immediately. If the shakshuka sits for too long, or is left covered, the egg yolks will become solid.",
        recipe_id: 4,
    }, {
        title: "Finish App Academy's CSS Exercise",
        body: "Make sure you get some practice in CSS or will haunt you later on...",
        recipe_id: 4,
    }]
)

r5 = Recipe.create!(
    title: 'Mouth-Watering Stuffed Mushrooms',
    category: 'Appetizer',
    body: "These delicious mushrooms taste just like restaurant-style stuffed mushrooms and are my guy's absolute favorite.",
    ingredients: ['12 whole fresh mushrooms1', 'tablespoon vegetable oil', '1 tablespoon minced garlic', '1 (8 ounce) package cream cheese, softened', '1/4 cup grated Parmesan cheese', '1/4 teaspoon ground black pepper', '1/4 teaspoon onion powder', '1/4 teaspoon ground cayenne pepper'],
    author_id: User.order('RANDOM()').first.id,
    id: 5,
    photo_url: 'https://icook-seeds.s3-us-west-1.amazonaws.com/stuffed-mushrooms.jpg'
)

# file = open('https://icook-seeds.s3-us-west-1.amazonaws.com/stuffed-mushrooms.jpg')
# r5.photo.attach(io: file, filename: 'stuffed-mushrooms.jpg')

r5Steps = Step.create!(
    [{
        title: "Preheat Oven and Prep Ingredients",
        body: "Preheat oven to 350 degrees F (175 degrees C). Spray a baking sheet with cooking spray. Clean mushrooms with a damp paper towel. Carefully break off stems. Chop stems extremely fine, discarding tough end of stems.",
        recipe_id: 5,
    }, {
        title: "Fry Garlic and Mushrooms Stems",
        body: "Heat oil in a large skillet over medium heat. Add garlic and chopped mushroom stems to the skillet. Fry until any moisture has disappeared, taking care not to burn garlic. Set aside to cool.",
        recipe_id: 5,
    }, {
        title: "Add Cheese and Stuff Mushrooms",
        body: "When garlic and mushroom mixture is no longer hot, stir in cream cheese, Parmesan cheese, black pepper, onion powder and cayenne pepper. Mixture should be very thick. Using a little spoon, fill each mushroom cap with a generous amount of stuffing. Arrange the mushroom caps on prepared cookie sheet.",
        recipe_id: 5,
    }, {
        title: "Bake",
        body: "Bake for 20 minutes in the preheated oven, or until the mushrooms are piping hot and liquid starts to form under caps.",
        recipe_id: 5,
    }]
)

r6 = Recipe.create!(
    title: 'Perfect Crab-Stuffed Mushrooms',
    category: 'Appetizer',
    body: "These little goodies are the perfect addition to your next holiday gathering or even the perfect appetizer to serve before a cozy dinner at home. Everyone will be dazzled by every delicious bite (they won't be able to keep their hands off of them!) You can smile while you think of how easy they were to toss together! And the best part - I usually end up with leftover stuffing, which freezes beautifully until the next carry-in!",
    ingredients: ['2 tablespoons butter', '2 tablespoons minced green onion', '1 cup cooked crabmeat, finely chopped', '1/2 cup dry bread crumbs', '1/4 cup shredded Monterey Jack cheese', '1 egg, beaten', '1 teaspoon lemon juice', '1/2 teaspoon dried dill weed', '1/2 cup butter, melted', '1 1/2 pounds fresh button mushrooms, stems removed', '1/2 cup shredded Monterey Jack cheese', '1/4 cup dry white wine'],
    author_id: User.order('RANDOM()').first.id,
    id: 6,
    photo_url: 'https://icook-seeds.s3-us-west-1.amazonaws.com/Crab-Stuffed-Mushrooms.jpg'
)

# file = open('https://icook-seeds.s3-us-west-1.amazonaws.com/Crab-Stuffed-Mushrooms.jpg')
# r6.photo.attach(io: file, filename: 'Crab-Stuffed-Mushrooms.jpg')

r6Steps = Step.create!(
    [{
        title: "Preheat Oven",
        body: "Preheat oven to 400 degrees F (200 degrees C).",
        recipe_id: 6,
    }, {
        title: "Mix the Ingredients",
        body: "Melt 2 tablespoons butter in a skillet; cook and stir green onion until softened, about 2 minutes. Transfer green onion to a bowl. Stir in crabmeat, bread crumbs, 1/4 cup Monterey Jack cheese, egg, lemon juice, and dill weed until well mixed.",
        recipe_id: 6,
    }, {
        title: "Fill Mushrooms with Mixture",
        body: "Pour 1/2 cup melted butter in a 9x13-inch baking dish; turn mushroom caps in butter to coat. Fill mushroom caps with the crab mixture and sprinkle with remaining 1/2 cup Monterey Jack cheese. Pour white wine into baking dish.",
        recipe_id: 6,
    }, {
        title: "Bake",
        body: "Bake in preheated oven until cheese is melted and lightly brown, 15 to 20 minutes.",
        recipe_id: 6,
    }]
)

r7 = Recipe.create!(
    title: 'Baked Ham and Cheese Party Sandwiches',
    category: 'Appetizer',
    body: 'These small, delicious sandwiches are perfect for any party. They are so good that even the pickiest of eaters will eat these.',
    ingredients: ['3/4 cup melted butter', '1 1/2 tablespoons Dijon mustard', '1 1/2 teaspoons Worcestershire sauce', '1 1/2 tablespoons poppy seeds', '1 tablespoon dried minced onion', '24 mini sandwich rolls', '1 pound thinly sliced cooked deli ham', '1 pound thinly sliced Swiss cheese'],
    author_id: User.order('RANDOM()').first.id,
    id: 7,
    photo_url: 'https://icook-seeds.s3-us-west-1.amazonaws.com/baked-ham-sandwiches.jpg'
)

# file = open('https://icook-seeds.s3-us-west-1.amazonaws.com/baked-ham-sandwiches.jpg')
# r7.photo.attach(io: file, filename: 'baked-ham-sandwiches.jpg')

r7Steps = Step.create!(
    [{
        title: "Preheat Oven",
        body: "Preheat oven to 350 degrees F (175 degrees C). Grease a 9x13-inch baking dish.",
        recipe_id: 7,
    }, {
        title: "Mix the Ingredients",
        body: "In a bowl, mix together butter, Dijon mustard, Worcestershire sauce, poppy seeds, and dried onion. Separate the tops from bottoms of the rolls, and place the bottom pieces into the prepared baking dish. Layer about half the ham onto the rolls. Arrange the Swiss cheese over the ham, and top with remaining ham slices in a layer. Place the tops of the rolls onto the sandwiches. Pour the mustard mixture evenly over the rolls.",
        recipe_id: 7,
    }, {
        title: "Bake",
        body: "Bake in the preheated oven until the rolls are lightly browned and the cheese has melted, about 20 minutes. Slice into individual rolls through the ham and cheese layers to serve.",
        recipe_id: 7,
    }]
)

r8 = Recipe.create!(
    title: 'Pork Chops in Garlic Mushroom Sauce',
    category: 'Main Dish',
    body: "This recipe is my twist on a fancy restaurant meal we got on Valentine's Day. The recipe has half the amount of garlic than was originally used. Hope everyone else enjoys it just as much as we do. Garnish with fresh parsley, chives, or thyme leaves.",
    ingredients: ['2 pounds boneless pork chops', '1/2 teaspoon paprika', '1 pinch kosher salt and ground black pepper to taste', '1/4 cup butter, divided', '1 (8 ounce) package sliced fresh mushrooms', '4 cloves garlic, minced', '1 teaspoon Dijon mustard', '2 tablespoons all-purpose flour', '2 cups beef broth'],
    author_id: User.order('RANDOM()').first.id,
    id: 8,
    photo_url: 'https://icook-seeds.s3-us-west-1.amazonaws.com/Garlic-Pork-Chops-in-Creamy-Mushroom-Sauce.jpg'
)

# file = open('https://icook-seeds.s3-us-west-1.amazonaws.com/Garlic-Pork-Chops-in-Creamy-Mushroom-Sauce.jpg')
# r8.photo.attach(io: file, filename: 'Garlic-Pork-Chops-in-Creamy-Mushroom-Sauce.jpg')

r8Steps = Step.create!(
    [{
        title: "Season the Pork",
        body: "Season both sides of pork chops with paprika, salt, and pepper.",
        recipe_id: 8,
    }, {
        title: "Sear Pork Chops and Set Aside",
        body: "Heat a large skillet over medium-high heat; add 2 tablespoons butter. Sear pork chops until golden brown and no longer pink in the center, 2 to 4 minutes per side. Remove pork chops from the skillet and set aside.",
        recipe_id: 8,
    }, {
        title: "Cook Mushrooms and Garlic",
        body: "Melt remaining butter in the same skillet over medium-high heat. Add mushrooms and cook until golden and excess moisture evaporates, about 5 minutes. Add garlic and mustard; cook until garlic is fragrant, about 1 minute.",
        recipe_id: 8,
    }, {
        title: "Add Flour and let sauce thicken",
        body: "Add flour to the skillet, stirring to remove any lumps. Slowly add beef broth, whisking until incorporated. Season with salt and pepper. Reduce heat to medium and simmer, stirring often, until sauce thickens, about 5 minutes. Check for seasoning again.",
        recipe_id: 8,
    }, {
        title: "Add Pork Chops and heat",
        body: "Return pork chops to the skillet and cook until heated through, about 1 minute. Serve hot.",
        recipe_id: 8,
    }]
)

r9 = Recipe.create!(
    title: "World's Best Lasagna",
    category: 'Main Dish',
    body: "It takes a little work, but it is worth it.",
    ingredients: ['1 pound sweet Italian sausage', '3/4 pound lean ground beef', '1/2 cup minced onion', '2 cloves garlic, crushed', '1 (28 ounce) can crushed tomatoes', '2 (6 ounce) cans tomato paste', '2 (6.5 ounce) cans canned tomato sauce', '1/2 cup water', '2 tablespoons white sugar', '1 1/2 teaspoons dried basil leaves', '1/2 teaspoon fennel seeds', '1 teaspoon Italian seasoning', '1 1/2 teaspoons salt, divided, or to taste', '1/4 teaspoon ground black pepper', '4 tablespoons chopped fresh parsley', '12 lasagna noodles', '16 ounces ricotta cheese', '1 egg', '3/4 pound mozzarella cheese, sliced', '3/4 cup grated Parmesan cheese'],
    author_id: User.order('RANDOM()').first.id,
    id: 9,
    photo_url: 'https://icook-seeds.s3-us-west-1.amazonaws.com/lasagna.jpg'
)

# file = open('https://icook-seeds.s3-us-west-1.amazonaws.com/lasagna.jpg')
# r9.photo.attach(io: file, filename: 'lasagna.jpg')

r9Steps = Step.create!(
    [{
        title: "Cook Meat and Vegetables",
        body: "In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 teaspoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally.",
        recipe_id: 9,
    }, {
        title: "Cook Lasagna Noodles",
        body: "Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2 teaspoon salt.",
        recipe_id: 9,
    }, {
        title: "Preheat Oven",
        body: "Preheat oven to 375 degrees F (190 degrees C).",
        recipe_id: 9,
    }, {
        title: "Assemble Lasagna",
        body: "To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13 inch baking dish. Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the ricotta cheese mixture. Top with a third of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese. Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray, or make sure the foil does not touch the cheese.",
        recipe_id: 9,
    }, {
        title: "Bake",
        body: "Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes. Cool for 15 minutes before serving.",
        recipe_id: 9,
    }]
)

r10 = Recipe.create!(
    title: "Chef John's Perfect Prime Rib",
    category: 'Main Dish',
    body: "This is a specific formula for achieving a perfectly pink prime rib cooked somewhere a shade under medium rare. To use this method you must have a full-sized, modern oven with a digital temperature setting that indicates when it is preheated. Older ovens with manual controls can vary greatly, and the doors may not have the proper insulation.",
    ingredients: ['4 pounds prime rib roast', '1/4 cup unsalted butter, softened', '1 tablespoon freshly ground black pepper', '1 teaspoon herbes de Provence', 'kosher salt'],
    author_id: User.order('RANDOM()').first.id,
    id: 10,
    photo_url: 'https://icook-seeds.s3-us-west-1.amazonaws.com/perfect-prime-rib.jpg'
)

# file = open('https://icook-seeds.s3-us-west-1.amazonaws.com/perfect-prime-rib.jpg')
# r10.photo.attach(io: file, filename: 'perfect-prime-rib.jpg')

r10Steps = Step.create!(
    [{
        title: "Bring Roast to room temperature",
        body: "Place rib roast on a plate and bring to room temperature, about 4 hours.",
        recipe_id: 10,
    }, {
        title: "Preheat Oven",
        body: "Preheat an oven to 500 degrees F (260 degrees C).",
        recipe_id: 10,
    }, {
        title: "Season Meat",
        body: "Combine butter, pepper, and herbes de Provence in a bowl; mix until well blended. Spread butter mixture evenly over entire roast. Season roast generously with kosher salt.",
        recipe_id: 10,
    }, {
        title: "Assemble Lasagna",
        body: "Roast the 4-pound prime rib (see footnote if using a larger and smaller roast) in the preheated oven for 20 minutes. Turn the oven off and, leaving the roast in the oven with the door closed, let the roast sit in the oven for 2 hours. Remove roast from the oven, slice, and serve.",
        recipe_id: 10,
    }]
)

r11 = Recipe.create!(
    title: "Super Duper Slow Cooker Beef Stroganoff",
    category: 'Main Dish',
    body: "A super-easy stroganoff with little-to-no fuss. It smells wonderful and is tasty like no other stroganoff you've had before thanks to the addition of cream cheese along with the sour cream. Of course, serve over hot, buttered flat noodles. Try it, and your taste buds will thank you!",
    ingredients: ['1 1/2 pounds cubed beef stew meat', 'salt and ground black pepper to taste', '1 onion, chopped', '1 (10.75 ounce) can condensed cream of mushroom soup', '1/4 cup water', '1 tablespoon dried chives', '2 cloves garlic, minced', '1 tablespoon Worcestershire sauce', '1 cube beef bouillon', '1/2 cup red wine', '1 tablespoon cornstarch', '1 tablespoon all-purpose flour', '1 (8 ounce) container sour cream', '1 (8 ounce) package sliced fresh mushrooms', '4 ounces cream cheese', '1/2 cup chopped fresh parsley'],
    author_id: User.order('RANDOM()').first.id,
    id: 11,
    photo_url: 'https://icook-seeds.s3-us-west-1.amazonaws.com/Beef-Stroganoff.JPG'
)

# file = open('https://icook-seeds.s3-us-west-1.amazonaws.com/Beef-Stroganoff.JPG')
# r11.photo.attach(io: file, filename: 'Beef-Stroganoff.JPG')

r11Steps = Step.create!(
    [{
        title: "Combine Ingredients",
        body: "Spread beef stew meat into bottom of slow cooker crock; season with salt and pepper. Layer onion over the beef. Pour mushroom soup and water over the beef; add chives, garlic, Worcestershire sauce, and beef bouillon.",
        recipe_id: 11,
    }, {
        title: "Make Cornstarch Wine Sauce",
        body: "Whisk red wine, cornstarch, and flour together in a small bowl; pour over the mixture in the slow cooker.",
        recipe_id: 11,
    }, {
        title: "Cook All Day Long",
        body: "Cook on Low for 6 to 7 hours. Stir sour cream, mushrooms, cream cheese, and parsley into the beef mixture; continue cooking for 1 hour more.",
        recipe_id: 11,
    }]
)
