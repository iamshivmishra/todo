let nextTodoId = 1
export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    id: todo.id ? todo.id : nextTodoId++,
    text: todo.text
})

export const clearCompleted = () => ({
    type: 'CLEAR_COMPLETED',
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})