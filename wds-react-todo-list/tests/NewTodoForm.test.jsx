import { render, screen, fireEvent } from '@testing-library/react'
import { NewTodoForm } from '../src/components/NewTodoForm'

test('calls onSubmit with the new item and clears the input', () => {
  const handleSubmit = jest.fn()
  render(<NewTodoForm onSubmit={handleSubmit} />)

  const input = screen.getByRole('textbox')
  const button = screen.getByRole('button', { name: /add/i })

  fireEvent.change(input, { target: { value: 'Buy milk' } })
  expect(input.value).toBe('Buy milk')

  fireEvent.click(button)
  expect(handleSubmit).toHaveBeenCalledWith('Buy milk')
  expect(input.value).toBe('')
})
