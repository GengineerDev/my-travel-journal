import './App.css'
import Card from './Card'
import Navbar from './Navbar'
import data from './data'

function App() {

  const places = data.map(place => {
    return (
      <Card 
        key={place.id}
        {...place}
      />
    )
  })

  return (
    <div>
      <Navbar />
      {places}
    </div>
  )
}

export default App
