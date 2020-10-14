import React from 'react'
import { render } from '@testing-library/react'
import Application from '.'

test('Application Render Test', () => {
  const { container } = render(<Application />)
  expect(container).toBeInstanceOf(HTMLDivElement)
})
