const todo = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state && state.length > 0 && state.some(x => x.id === action.id) ? state.map(todo =>
                todo.id === action.id ? { ...todo, text: action.text } : todo
            ) : [...state, { id: action.id, text: action.text, completed: false }]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        case 'CLEAR_COMPLETED':
            return state.filter(x => x.completed === false)
        default:
            return state
    }
}

export default todo