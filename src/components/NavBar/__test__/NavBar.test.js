import React from 'react'
import { render } from '@testing-library/react'
import { NavBar } from '../'
import { MemoryRouter } from 'react-router-dom'

test('renders without crashing', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
})
