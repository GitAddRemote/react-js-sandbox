import { render, screen, fireEvent, act } from '@testing-library/react'
import App from '../src/App'

beforeAll(() => {
  jest.useFakeTimers()
})

afterAll(() => {
  jest.useRealTimers()
})

test('toggles the Alert on and off and respects the timer', () => {
  render(<App />)

  // no alert at start
  expect(
    screen.queryByText(/Relax, you've still some time left!/i)
  ).toBeNull()

  // click “Alert” button to show
  fireEvent.click(screen.getByRole('button', { name: /alert/i }))

  // now the “still some time left” message appears
  expect(
    screen.getByText(/Relax, you've still some time left!/i)
  ).toBeInTheDocument()

  // advance timer
  act(() => {
    jest.advanceTimersByTime(2000)
  })
  expect(
    screen.getByText(/Time's up!/i)
  ).toBeInTheDocument()

  // click again to hide
  fireEvent.click(screen.getByRole('button', { name: /alert/i }))
  expect(
    screen.queryByText(/Time's up!/i)
  ).toBeNull()
})
