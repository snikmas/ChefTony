import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactoDom from 'react-dom'

export default function RecipeSector({recipe}) {
  return (
    <section className="recipeSection">
      <h6>Suggested Recipe:</h6>
      <span>Based on your ingredients, I'd recommend you making this one:</span>
      <div className="recipeContent" dangerouslySetInnerHTML={{__html: recipe}}>
      </div>
    </section>

  )
}