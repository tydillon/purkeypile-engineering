import React from 'react'
import { render } from '@testing-library/react'
import { Logo } from '../'

test('renders without crashing', () => {
  render(<Logo />)
})
