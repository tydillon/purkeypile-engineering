import React from 'react'
import { render } from '@testing-library/react'
import { Services } from '../'

test('renders without crashing', () => {
  render(<Services />)
})
