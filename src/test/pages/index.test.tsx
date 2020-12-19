import React from 'react'
import { render } from 'test/testUtils'
import Index from 'pages/index'

describe('Index page', () => {
  it('should display document static texts', async () => {
    const { findByText } = render(<Index />, {})

    await findByText('Next.js with TypeScript example')
    await findByText('Go to the about page')
  })
})
