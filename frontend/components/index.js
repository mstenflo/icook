var unirest = require("unirest");

var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search");

req.query({
  "query": "burger"
});

req.headers({
  "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  "x-rapidapi-key": "56bcd60d91msheb849be77a39101p175f7bjsn88bcaa486743",
  "useQueryString": true
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res, res.body.results[0]);
});