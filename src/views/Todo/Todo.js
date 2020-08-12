import React from 'react';
import { connect } from 'react-redux'
import { addTodo, clearCompleted, toggleTodo } from '../../action';

function Todo(props) {
    const [todoValue, setTodoValue] = React.useState("");
    const [todoId, setTodoId] = React.useState("");
    const { todoList } = props;
    let todosList = todoList.filter(x => x.completed === false)
    let completeList = todoList.filter(x => x.completed === true)

    return (
        <div className="padding15">
            <div className="text-center">
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        if (!todoValue.trim()) {
                            return
                        }
                        props.addTodo({ text: todoValue, id: todoId })
                        setTodoValue("")
                        setTodoId("")
                    }}
                >
                    <input type="text" placeholder="Add Todo" value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
                    <button className="ml5">Submit</button>
                </form>
            </div>
            <div className="todo-list">
                {todosList && todosList.length > 0 && todosList.map((todo) =>
                    <div className="todo-item">
                        <input type="checkbox" onChange={() => props.toggleTodo(todo.id)} checked={todo.completed===true} />
                        <label className="curser-pointer" onClick={() => { setTodoValue(todo.text); setTodoId(todo.id) }}>{todo.text}</label>
                    </div>
                )}
            </div>
            {completeList && completeList.length > 0 &&
                <div className="todo-list">
                    <div className="text-center">
                        <h5>Completed List</h5>
                    </div>
                    {completeList.map((complete) =>
                        <div className="todo-item">
                            <input type="checkbox" onChange={() => props.toggleTodo(complete.id)} checked />
                            <label>{complete.text}</label>
                        </div>
                    )}
                    <div className="text-center">
                        <button onClick={props.clearCompleted}>Clear all completed</button>
                    </div>
                </div>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        todoList: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: text => dispatch(addTodo(text)),
        clearCompleted: () => dispatch(clearCompleted()),
        toggleTodo: id => dispatch(toggleTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)