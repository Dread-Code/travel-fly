import getOptions from '../getOptions'

const getDropDownOptions = () => {
  const options = getOptions().filter(({ name }) => name !== 'Inicio')

  return options.map(({ id, name, pathName }) => ({
    key: id,
    text: name,
    value: id,
    name: pathName
  }))
}

export default getDropDownOptions
