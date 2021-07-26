import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import useWindowDimensions from '../../../hooks/useWindowDimensions/useWindowDimensions'
import getDropDownOptions from '../../../utils/getDropDownOptions/getDropDownOptions'
import banner from '../../../assets/images/travel_fly.jpg'
import MobileBanner from '../../../assets/images/travel_fly_mobile.jpg'

const useHome = () => {
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
    const result = options.filter(({ text }) => {
      if (text) return text === target.innerText
      return null
    })
    if (result.length !== 0) {
      history.push(`/${result[0].name}`)
    }
  }

  return {
    handlerOnClose,
    options,
    image
  }
}
export default useHome
