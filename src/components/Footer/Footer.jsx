import React from 'react'
import { List, Divider, Header, Grid, Segment, Container } from 'semantic-ui-react'
import './Footer.scss'

const Footer = () => (
  <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
    <Container textAlign="center">
      <Grid divided inverted stackable>
        <Grid.Column width={3}>
          <Header inverted as="h4" content="Somos Travel FLy" />
          <List link inverted>
            <List.Item as="a">Link </List.Item>
            <List.Item as="a">Link Two</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as="h4" content="Confianza en tu viaje" />
          <List link inverted>
            <List.Item as="a">Términos y condiciones</List.Item>
            <List.Item as="a">Link Two</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as="h4" content="Potencia tu negocio" />
          <List link inverted>
            <List.Item as="a">Agrega tu aerolinea</List.Item>
            <List.Item as="a">Programa de Agencias Afiliadas</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={7}>
          <Header inverted as="h4" content="Travel Fly" />
          <p>Las mejores aerolineas a los mejores precios.</p>
        </Grid.Column>
      </Grid>

      <Divider inverted section />
      <List horizontal inverted divided link size="small">
        <List.Item as="a" href="#">
          Site Map
        </List.Item>
        <List.Item as="a" href="#">
          Contact Us
        </List.Item>
        <List.Item as="a" href="#">
          Terms and Conditions
        </List.Item>
        <List.Item as="a" href="#">
          Privacy Policy
        </List.Item>
      </List>
    </Container>
  </Segment>
)

export default Footer
