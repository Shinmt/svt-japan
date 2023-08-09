import React from 'react'
import Home from './pages/Home.jsx'
import Album from './pages/Album.jsx'
import Footer from './pages/Footer.jsx'

const App = () => {
  return (
    <div className=' overflow-hidden'>
      <Home />
      <Album />
      <Footer />
    </div>
)
}

export default App