import React from 'react'
import { HashRouter } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Routes from './Routes'

const App = () => {
  return (
    <HashRouter>
    <main>
      <Navbar />
      <Routes />
    </main>
  </HashRouter>
  )
}

export default App;