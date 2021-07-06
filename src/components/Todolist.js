import React from 'react'

const Todolist = ({todos,setTodos}) => {

const deleteHandler = (e) => {
todos.splice(e,1)
setTodos([...todos])

}

    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {
                        todos.map((todo,index) => <li className="todo-item" key={index}>{todo}<button onClick={deleteHandler}>Delete</button></li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Todolist
