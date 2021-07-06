import React from 'react'

    const Form = ({setInputText,setTodos,inputText,todos}) => {
        const inputTextHandler = (e) => {
              setInputText(e.target.value)
        };
        const submitTodoHandler = (e) => {
            e.preventDefault();
            setTodos([...todos,inputText]);
        }
    return (
    <div>
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-bar" />
            <button onClick={submitTodoHandler} className="todo-btn" type="submit">
                <i className="fas fa-plus"></i>
            </button>
      </form>
    </div>
    )
}

export default Form
