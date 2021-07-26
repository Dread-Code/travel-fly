import React, { useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import useWindowDimensions from '../../hooks/useWindowDimensions/useWindowDimensions'
import getDropDownOptions from '../../utils/getDropDownOptions/getDropDownOptions'
import banner from '../../assets/images/travel_fly.jpg'
import MobileBanner from '../../assets/images/travel_fly_mobile.jpg'
import './Home.scss'

const Home = () => {
  const [options, setOptions] = useState([])
  const [image, setImage] = useState(null)
  const { width } = useWindowDimensions()
  const history = useHistory()

  useEffect(() => {
    const result = getDropDownOptions()
    setOptions(result)
  }, [])

  useEffect(() => {
    if (width < 600) {
      setImage(MobileBanner)
    } else {
      setImage(banner)
    }
  }, [width])

  const handlerOnClose = ({ target }) => {
    const { name } = options.filter(({ text }) => text === target.innerText)[0]
    history.push(`/${name}`)
  }

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
