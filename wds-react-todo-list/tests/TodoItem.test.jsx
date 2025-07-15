import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TodoItem } from '../src/components/TodoItem'

test('checkbox toggles and calls toggleTodo, delete button calls deleteTodo', async () => {
  const toggleTodo = jest.fn()
  const deleteTodo = jest.fn()

  render(
    <TodoItem
      id="abc"
      title="Test item"
      completed={false}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />
  )

  const checkbox = screen.getByRole('checkbox')
  const deleteBtn = screen.getByRole('button', { name: /delete/i })

await userEvent.click(checkbox)
  expect(toggleTodo).toHaveBeenCalledWith('abc', true)

await userEvent.click(deleteBtn)
  expect(deleteTodo).toHaveBeenCalledWith('abc')
})
