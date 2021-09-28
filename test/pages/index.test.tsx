import React from 'react'

import { render, screen } from '../testUtils'
import Index from '../../pages/index'

describe('Home page', () => {
  it('should render', () => {
    render(<Index />)
    expect(screen.queryByText('Layout Example (Index)')).toBeInTheDocument()
  })
})
