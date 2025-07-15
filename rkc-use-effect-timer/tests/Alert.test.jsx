import { render, screen, act } from '@testing-library/react'
import { Alert } from '../src/components/Alert'
const TIMER_DURATION_MS = 2000;

test(`shows initial message then "Time's up!" after ${TIMER_DURATION_MS / 1000} seconds`, () => {
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
    jest.advanceTimersByTime(TIMER_DURATION_MS)
  })

  // after timer
  expect(
    screen.queryByText(/Relax, you've still some time left!/i)
  ).not.toBeInTheDocument()
  expect(
    screen.getByText(/Time's up!/i)
  ).toBeInTheDocument()
})
