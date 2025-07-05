import chefGif from '../assets/loading.gif'

export default function Loading() {
  return (
    <div className="loading-container">
      <p>Chef is preparing a recipe for you <span className='loading-dots'></span></p>
      <img 
        src={chefGif}
        alt="Chef Tony thinking" 
        className="loading-gif" 
      />
    </div>
  )
}