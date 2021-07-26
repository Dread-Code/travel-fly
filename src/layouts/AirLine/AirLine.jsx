import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './AirLine.scss'
import { useLocation } from 'react-router-dom'
import capitalize from '../../utils/capitalize/capitalize'

const initialValues = () => ({
  name: '',
  username: '',
  email: '',
  password: '',
  repeatPassword: ''
})

const AirLine = () => {
  const { pathname } = useLocation()
  const company = pathname.replace('/', '')

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues,
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
    }
  })
  return (
    <div className="airline-container">
      <div className="form-container">
        <h3 className="register-form-title">
          {`Hola, bienvenido, sabemos que quieres viajar en ${capitalize(
            company
          )}, por favor diligencia el siguiente
        formulario:`}
        </h3>
        <Form className="register-form" onSubmit={handleSubmit}>
          <Form.Input
            type="text"
            placeholder="Nombre y Apellidos"
            name="name"
            error={errors?.name && errors.name}
            onChange={handleChange}
          />
          <Form.Input
            type="text"
            placeholder="Edad"
            name="age"
            error={errors?.age && errors.age}
            onChange={handleChange}
          />
          <Form.Input
            type="text"
            placeholder="Correo Electrónico"
            name="email"
            error={errors?.email && errors.email}
            onChange={handleChange}
          />
          <Form.Input
            type="text"
            placeholder="Celular"
            name="cellphone"
            error={errors?.cellphone && errors.cellphone}
            onChange={handleChange}
          />
          <Button className="btn-submit" type="submit">
            Registrarse
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default AirLine
