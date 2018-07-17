import React from 'react'
import Contact from '../components/Contact'
import renderer from 'react-test-renderer'

describe('Test contact component', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(<Contact />)
    expect(rendered.toJSON()).toMatchSnapshot()
  })
})
