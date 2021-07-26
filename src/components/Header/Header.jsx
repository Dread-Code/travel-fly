import React from 'react'
import { GiCrossedAirFlows } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => (
  <header className="header">
    <Link to="/home">
      <div className="header__logo">
        <GiCrossedAirFlows />
        <div>
          <h1>Travel Fly</h1>
        </div>
      </div>
    </Link>
    <div />
    <div>
      <h2 className="header__description">Las Mejores Aerolineas a los Mejores Precios</h2>
    </div>
  </header>
)

export default Header
