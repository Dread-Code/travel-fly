import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useLocation } from 'react-router-dom'

const initialValues = () => ({
  name: '',
  age: '',
  email: '',
  cellphone: ''
})

const useAirlineHook = () => {
  const { pathname } = useLocation()
  const company = pathname.replace('/', '')
  const [showModal, setshowModal] = useState(false)

  const { handleSubmit, handleChange, errors, resetForm, values } = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      name: Yup.string().required('Tu nombre es obligatorio.'),
      email: Yup.string().email('El email no es valido').required('El email es obligatorio'),
      age: Yup.string()
        .matches(/(?:\b|-)([1-9]{1,2}[0]?|100)\b/, 'Debes ingresar la edad del 1 al 100')
        .required('Edad obligatorio.'),
      cellphone: Yup.string()
        .required('El numero celular es obligatorio.')
        .matches(
          /(3)[ -]*([0-9][ -]*){9}$/,
          'Debes ingresar un numero que empiece por tres y tenga diez digitos'
        )
    }),
    onSubmit: async formData => {
      console.log(formData)
      resetForm(initialValues)
      setshowModal(true)
      setTimeout(() => {
        setshowModal(false)
      }, 5000)
    }
  })
  return {
    company,
    showModal,
    handleSubmit,
    handleChange,
    errors,
    values,
    setshowModal
  }
}

export default useAirlineHook
