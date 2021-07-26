import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import getOptions from '../../utils/getOptions'
import './Menu.scss'

const MenuComponent = () => {
  const [activeItem, setActiveItem] = useState('inicio')
  const options = getOptions()
  const history = useHistory()
  const handleItemClick = (e, { name }) => {
    setActiveItem(name)
    history.push(`/${name}`)
  }

  return (
    <Menu color="black" inverted widths={3} className="menu">
      {options.map(({ id, name, pathName }) => (
        <Menu.Item
          name={pathName}
          active={activeItem === { name }}
          onClick={handleItemClick}
          key={id}
        />
      ))}
    </Menu>
  )
}
export default MenuComponent
