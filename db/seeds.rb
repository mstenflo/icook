# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Recipe.destroy_all

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


p1 = Recipe.create!(
    title: 'Sesame Crisp Thai Crab Cakes',
    category: 'Appetizer',
    body: 'Impress your friends with this tasty treat.',
    author_id: User.order('RANDOM()').first.id,
)

p2 = Recipe.create!(
    title: 'Chicken Vegetable Noodle Soup',
    category: 'Soup',
    body: 'Chicken soup for the soul.',
    author_id: User.order('RANDOM()').first.id,
)

p3 = Recipe.create!(
    title: 'Gooey Chocolate Cake',
    category: 'Dessert',
    body: 'Treat yourself with this decadent dessert.',
    author_id: User.order('RANDOM()').first.id,
)

p4 = Recipe.create!(
    title: 'Blueberry Milkshake',
    category: 'Dessert',
    body: 'Yumm.....',
    author_id: User.order('RANDOM()').first.id,
)

p5 = Recipe.create!(
    title: 'Healthy Vegetable Soup',
    category: 'Soup',
    body: 'Soupy goodness.',
    author_id: User.order('RANDOM()').first.id,
)

p6 = Recipe.create!(
    title: 'Millet Salad with Roasted Peppers and Olives',
    category: 'Salad',
    body: 'A healthy salad.',
    author_id: User.order('RANDOM()').first.id,
)

p7 = Recipe.create!(
    title: 'Ginger Spice Cookies',
    category: 'Dessert',
    body: 'Good for the holidays.',
    author_id: User.order('RANDOM()').first.id,
)

p8 = Recipe.create!(
    title: 'Vegan Banana Bread',
    category: 'Dessert',
    body: 'So good',
    author_id: User.order('RANDOM()').first.id,
)

p9 = Recipe.create!(
    title: 'Lemon and Orange Cake',
    category: 'Dessert',
    body: 'Tangy and sweet cake.',
    author_id: User.order('RANDOM()').first.id,
)

p10 = Recipe.create!(
    title: 'Pesto Chicken and Vegetable Lasagne',
    category: 'Main Dish',
    body: "Best lasagna I ever had, it's my mother's recipe.",
    author_id: User.order('RANDOM()').first.id,
)

