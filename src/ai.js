import { HfInference } from '@huggingface/inference'

console.log('VITE_HF_TOKEN:', import.meta.env.VITE_HF_TOKEN); // Debug line
const hf = new HfInference(import.meta.env.VITE_HF_TOKEN)

let SYSTEM_PROMPT = "You are a nutritionist, can suggest a healthy recipes" 

export async function getRecipeFromAi(ingredientsArr) {


  const ingredientsString = ingredientsArr.join(', ')
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT},
        { role: "user", content: `I have ${ingredientsString}. Give me a recipe that you'd reccomend I make, Healthy. Start your message from "Based on your available ingredients.. Also, your return message should be in html tags and classes`}],
        max_tokens: 1024,
    })



    return response.choices[0].message.content
  } catch(err){
    console.error(err.message)
  }
}