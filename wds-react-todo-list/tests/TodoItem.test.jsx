import { render, screen, fireEvent } from '@testing-library/react'
import { TodoItem } from '../src/components/TodoItem'

test('checkbox toggles and calls toggleTodo, delete button calls deleteTodo', () => {
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

  fireEvent.click(checkbox)
  expect(toggleTodo).toHaveBeenCalledWith('abc', true)

  fireEvent.click(deleteBtn)
  expect(deleteTodo).toHaveBeenCalledWith('abc')
})
