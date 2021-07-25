import { shallow } from 'enzyme'
import React from 'react'
import Header from './Header'

describe('Header', () => {
  test('should ', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })
})
