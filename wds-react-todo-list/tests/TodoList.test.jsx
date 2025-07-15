import { render, screen } from '@testing-library/react'
import { TodoList } from '../src/components/TodoList' 

jest.mock( '../src/components/TodoItem', () => ({
  TodoItem: ({ title }) => <li>{title}</li>
}))

test('renders a list of todo titles', () => {
  const items = [
    { id: '1', title: 'One', completed: false },
    { id: '2', title: 'Two', completed: true },
  ]

  render(
    <TodoList
      todoList={items}
      onToggle={jest.fn()}
      onDelete={jest.fn()}
    />
  )

  expect(screen.getByText('One')).toBeInTheDocument()
  expect(screen.getByText('Two')).toBeInTheDocument()
})
