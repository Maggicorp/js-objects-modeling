const recipe = {
  name:
  author:

printRecipe: function() {
for (let i = 0, i < recipe.ingredients.lengths; i++)
    const line = this.ingredients[i].quantity + ' ' + this.ingredients[i].unitMeasure
    + ' of ' + this.ingredients[i].name
    console.log(line)
}

module.exports = recipe
