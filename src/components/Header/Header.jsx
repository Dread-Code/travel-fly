import React from 'react'
import { GiCrossedAirFlows } from 'react-icons/gi'
import './Header.scss'

const Header = () => (
  <header className="header">
    <div className="header__logo">
      <GiCrossedAirFlows />
      <div>
        <h1>Travel Fly</h1>
      </div>
    </div>
    <div />
    <div>
      <h2 className="header__description">Las Mejores Aerolineas a los Mejores Precios</h2>
    </div>
  </header>
)

export default Header
