import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import getOptions from '../../../utils/getOptions'

const useMenu = () => {
  const [activeItem, setActiveItem] = useState('inicio')
  const options = getOptions()
  const history = useHistory()
  const handleItemClick = (e, { name }) => {
    setActiveItem(name)
    history.push(`/${name}`)
  }

  return {
    activeItem,
    options,
    handleItemClick
  }
}

export default useMenu
