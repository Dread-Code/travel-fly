import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import './AirLine.scss'
import capitalize from '../../utils/capitalize/capitalize'
import ModalBasic from '../../components/ModalBasic'
import useAirlineHook from './hook'

const AirLine = () => {
  const { company, showModal, handleSubmit, handleChange, errors, values, setshowModal } =
    useAirlineHook()
  return (
    <>
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
              value={values.name}
              error={errors?.name && errors.name}
              onChange={handleChange}
            />
            <Form.Input
              type="text"
              placeholder="Edad"
              name="age"
              value={values.age}
              error={errors?.age && errors.age}
              onChange={handleChange}
            />
            <Form.Input
              type="text"
              placeholder="Correo Electrónico"
              name="email"
              value={values.email}
              error={errors?.email && errors.email}
              onChange={handleChange}
            />
            <Form.Input
              type="text"
              placeholder="Celular"
              name="cellphone"
              value={values.cellphone}
              error={errors?.cellphone && errors.cellphone}
              onChange={handleChange}
            />
            <Button className="btn-submit" type="submit">
              Registrarse
            </Button>
          </Form>
        </div>
      </div>
      <ModalBasic
        show={showModal}
        setShow={setshowModal}
        title={`${capitalize(company)} te informa:`}
      >
        <p>Tu información fue enviada con éxito, estaremos en contacto contigo</p>
      </ModalBasic>
    </>
  )
}

export default AirLine
