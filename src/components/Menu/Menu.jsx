import React from 'react'
import { Menu } from 'semantic-ui-react'
import useMenu from './hook/useMenu'
import './Menu.scss'

const MenuComponent = () => {
  const { activeItem, options, handleItemClick } = useMenu()

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
