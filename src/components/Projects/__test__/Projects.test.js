import React from 'react'
import { render } from '@testing-library/react'
import { Projects } from '../'

test('renders without crashing', () => {
  render(<Projects />)
})
