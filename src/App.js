import React from 'react'
import Header from './components/Header/Header'
import 'semantic-ui-css/semantic.min.css'
import MenuComponent from './components/Menu/Menu'
import AppRouter from './router/AppRouter'

function App() {
  return (
    <div className="App">
      <Header />
      <MenuComponent />
      <AppRouter />
    </div>
  )
}

export default App
