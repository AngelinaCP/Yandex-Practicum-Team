import App from './App'
import { render, screen } from '@testing-library/react'

const appContent = 'Вот тут будет жить ваше приложение :)'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)

test('it has 8 routes', async () => {
  render(<App />)
  expect(screen.getAllByRole('link')).toHaveLength(8)
})
