import './App.css'
import Card from './Card/Card'

function App() {

  return (
    <>
      <div>
        <div className='top-bar'>
        <h1 className='main-text'>SpongeBob Squarepants</h1>
        </div>
        <div className='card-holder'>
        <Card/>
        </div>
      </div>
    </>
  )
}

export default App
