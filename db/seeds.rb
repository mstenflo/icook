# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'open-uri'
file = open('https://icook-seeds.s3-us-west-1.amazonaws.com/batch_cooking.jpg')

User.destroy_all
Recipe.destroy_all
Step.destroy_all

10.times do 
    User.create(username: Faker::Name.first_name, email: Faker::Internet.email, password: 'password')
end

demo = User.create({
  username: 'demoUser',
  password: 'demodemo',
  email: 'demo@user.com'
})

martin = User.create({
  username: 'martin',
  password: 'martin',
  email: 'martin@martin.com'
})


r1 = Recipe.create!(
    title: 'Broccoli and cream cheese soup',
    category: 'Soup',
    body: 'The key to this delicious and creamy soup is cream cheese! Oh so good! Ingredients: 1 head broccoli, but into florets, 2 tablespoons salted butter, 1 onion finely chopped, 1 clove garlic, minced, 150mL vegetable stock, 300mL full fat milk, 300g cream cheese, salt and pepper, to taste, 2 tablespoons chopped fresh chervil, 55g grated Parmesan cheese',
    author_id: User.order('RANDOM()').first.id,
    photo_url: "crab_cakes.jpg",
    id: 1,
)

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
    body: "These are a tasty change from the usual since they use cornbread crumbs instead of crackers or regular bread. They're always a hit at parties! A friend shared this recipe with me ages ago and I've tweaked it to come up with this. Ingredients: 2 cups crumbled cornbread, 1 (10 ounce) can enchilada sauce, divided, 1/2 teaspoon salt, 1 1/2 pounds ground beef chuck, 1 (10 ounce) can tomato sauce, 1 cup shredded Mexican cheese blend, divided",
    author_id: User.order('RANDOM()').first.id,
    photo_url: "crab_cakes.jpg",
    id: 2,
)

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
    body: 'These are a low calorie nutritious snack. Like potato chips, you cannot stop at just eating one. They are great for parties and a good conversation topic. Ingredients: 1 bunch kale, 1 tablespoon olive oil, 1 teaspoon seasoned salt',
    author_id: User.order('RANDOM()').first.id,
    photo_url: "crab_cakes.jpg",
    id: 3,
)

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
    title: 'Blueberry Milkshake',
    category: 'Dessert',
    body: 'Yumm.....',
    author_id: User.order('RANDOM()').first.id,
    photo_url: "crab_cakes.jpg",
    id: 4,
)

r5 = Recipe.create!(
    title: 'Healthy Vegetable Soup',
    category: 'Soup',
    body: 'Soupy goodness.',
    author_id: User.order('RANDOM()').first.id,
    photo_url: "crab_cakes.jpg",
    id: 5,
)

r6 = Recipe.create!(
    title: 'Millet Salad with Roasted Peppers and Olives',
    category: 'Salad',
    body: 'A healthy salad.',
    author_id: User.order('RANDOM()').first.id,
    photo_url: "crab_cakes.jpg",
    id: 6,
)

r7 = Recipe.create!(
    title: 'Ginger Spice Cookies',
    category: 'Dessert',
    body: 'Good for the holidays.',
    author_id: User.order('RANDOM()').first.id,
    photo_url: "crab_cakes.jpg",
    id: 7,
)

r8 = Recipe.create!(
    title: 'Vegan Banana Bread',
    category: 'Dessert',
    body: 'So good',
    author_id: User.order('RANDOM()').first.id,
    photo_url: "crab_cakes.jpg",
    id: 8,
)

r9 = Recipe.create!(
    title: 'Lemon and Orange Cake',
    category: 'Dessert',
    body: 'Tangy and sweet cake.',
    author_id: User.order('RANDOM()').first.id,
    photo_url: "crab_cakes.jpg",
    id: 9,
)

r10 = Recipe.create!(
    title: 'Pesto Chicken and Vegetable Lasagne',
    category: 'Main Dish',
    body: "Best lasagna I ever had, it's my mother's recipe.",
    author_id: User.order('RANDOM()').first.id,
    photo_url: "crab_cakes.jpg",
    id: 10,
)

r1.photo.attach(io: file, filename: 'batch_cooking.jpg')
r2.photo.attach(io: file, filename: 'batch_cooking.jpg')
r3.photo.attach(io: file, filename: 'batch_cooking.jpg')
r4.photo.attach(io: file, filename: 'batch_cooking.jpg')
r5.photo.attach(io: file, filename: 'batch_cooking.jpg')
r6.photo.attach(io: file, filename: 'batch_cooking.jpg')
r7.photo.attach(io: file, filename: 'batch_cooking.jpg')
r8.photo.attach(io: file, filename: 'batch_cooking.jpg')
r9.photo.attach(io: file, filename: 'batch_cooking.jpg')
r10.photo.attach(io: file, filename: 'batch_cooking.jpg')