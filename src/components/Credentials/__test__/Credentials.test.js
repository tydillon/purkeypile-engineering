import React from 'react'
import { render } from '@testing-library/react'
import { Credentials } from '../'

test('renders without crashing', () => {
  render(<Credentials />)
})
