import React from 'react'
import ListIngredients from './ListIngredients.jsx'
import Introduction from './Introduction'
import {getRecipeFromAi} from '../ai.js'
import RecipeSector from './RecipeSector'
import Loading from './Loading.jsx'


export default function Main(){

  const [ingredients, setIngredients] = React.useState([])

  const addIngredient = (e) => {
    e.preventDefault();
    
    if(input.trim()) {
      setIngredients([...ingredients, input.trim()]);
      setInput('')
    }
    
  };
  
  
  const [input, setInput] = React.useState('');
  
  // our recipe
  const [recipe, setRecipe] = React.useState('')
  
  const [isLoading, setIsLoading] = React.useState(false)

  async function getRecipe() {

    setIsLoading(true)

    const generatedRecipe = await getRecipeFromAi(ingredients);
    setRecipe(generatedRecipe);

    setIsLoading(false)

    console.log(generatedRecipe)
  }



  return (
    <section className="main">

      { ingredients.length == 0 &&  <Introduction />}

      <form onSubmit={addIngredient}>
        <input 
          type="text" 
          name="ingredient" // gives the input a name (usef for submit, access using e.target.elements)
          id="ingredient"  // only for css and lable
          value={input}  // important, e value,
          onChange={(e) => setInput(e.target.value)} // when its typic, updates the input state -> c -> ch -> chi -> chik
          placeholder="e.g. chicken" /> 
          <button type="submit" >Add ingredient</button> {/* this is an html so wee need open js for comments; sybmit for triggering form*/}
        </form>

      { ingredients.length > 0 && <ListIngredients ingredients={ingredients} getRecipe={getRecipe} /> }

      { isLoading && <Loading /> }

      { recipe && <RecipeSector recipe={recipe}/>}
  
  </section>
  )
}