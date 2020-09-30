import React from 'react'
import { render } from '@testing-library/react'
import { Home } from '../'

test('renders without crashing', () => {
  render(<Home />)
})
