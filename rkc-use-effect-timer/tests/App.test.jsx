import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../src/App'

test('toggles the Alert on and off and respects the timer', async () => {
  render(<App />)

  // create a userEvent instance that will advance fake timers
  const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })

  // no alert at start
  expect(
    screen.queryByText(/Relax, you've still some time left!/i)
  ).toBeNull()

  // click “Show Alert” to mount and start the 2s timer
  await user.click(screen.getByRole('button', { name: /alert/i }))

  // initial message appears immediately
  expect(
    screen.getByText(/Relax, you've still some time left!/i)
  ).toBeInTheDocument()

  // fast‑forward the 2 s timeout
  // (advanceTimers above will auto‑advance, but we still need act for React)
  act(() => jest.advanceTimersByTime(2000))

  // now the expired message shows
  expect(
    screen.getByText(/Time's up!/i)
  ).toBeInTheDocument()

  // click “Hide Alert” to unmount
  await user.click(screen.getByRole('button', { name: /alert/i }))

  // alert is gone
  expect(
    screen.queryByText(/Time's up!/i)
  ).toBeNull()
})
