import { render, screen, act } from '@testing-library/react'
import { Alert } from '../src/components/Alert'

test("shows initial message then \"Time's up!\" after 2 seconds", () => {
  render(<Alert />)

  // initial state
  expect(
    screen.getByText(/Relax, you've still some time left!/i)
  ).toBeInTheDocument()
  expect(
    screen.queryByText(/Time's up!/i)
  ).not.toBeInTheDocument()

  // fast‑forward 2 seconds
  act(() => {
    jest.advanceTimersByTime(2000)
  })

  // after timer
  expect(
    screen.queryByText(/Relax, you've still some time left!/i)
  ).not.toBeInTheDocument()
  expect(
    screen.getByText(/Time's up!/i)
  ).toBeInTheDocument()
})
