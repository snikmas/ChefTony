export default function ListIngredients( {ingredients, getRecipe }) {
  return (
    <section className="listIngredients">
      <h6>Ingredients in your bag:</h6>
      <ul>
        {ingredients.map((el) => {
          return (<li key={el}>{el}</li>)
        })}
      </ul>
      
      { ingredients.length >= 3 && <section className='getRecipe'>
      <div>
        <p>I see you're ready for a recipe</p>
          <span>Generate a recipe from your list of ingredients</span>
          </div>
          <button onClick={getRecipe}>Get a recipe</button>
      </section>}
    </section>
)
}