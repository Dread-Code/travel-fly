import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'
import 'semantic-ui-css/semantic.min.css'
import MenuComponent from './components/Menu/Menu'
import AppRouter from './router/AppRouter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <MenuComponent />
        <AppRouter />
        <Footer />
      </Router>
    </div>
  )
}

export default App
