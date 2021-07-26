import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import './Home.scss'
import useHome from './hook/useHome'

const Home = () => {
  const { handlerOnClose, options, image } = useHome()
  return (
    <div className="home-container">
      <div className="image" style={{ background: `url("${image}")` }}>
        <Dropdown
          downward
          search
          selection
          options={options}
          placeholder="Selecciona una aerolinea"
          onClose={handlerOnClose}
        />
      </div>
    </div>
  )
}

export default Home
