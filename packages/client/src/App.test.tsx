import App from './App'
import { render, screen } from '@testing-library/react'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)

test('it has 12 routes', async () => {
  render(<App />)
  expect(screen.getAllByRole('link')).toHaveLength(12)
})
