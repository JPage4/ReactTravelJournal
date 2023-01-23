import React from 'react'
import NavBar from './components/NavBar'
import Location from './components/Location'
import data from './data'

function App() {
const locations = data.map(location =>
  {
    return(
      <Location
        key={location.id}
        {...location}
        />
    )
  })
  return (
    <div>
      <NavBar />
      <section className='location-list'>
        {locations}
      </section>
    </div>
  )
}

export default App
