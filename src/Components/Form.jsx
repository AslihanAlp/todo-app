import React from 'react';

function Form({setInputText, setTodos, todos, inputText, setStatus}) {
   const handleChange = (e)=>{
        console.log(e.target.value)
       
        setInputText(e.target.value)
    }
    const handleClick= (e)=>{
        e.preventDefault()
        setTodos([...todos, {text: inputText, completed: false, id: Math.floor(Math.random()*1000)}])
        setInputText('')
    }
    const statusHandler=(e)=>{
        setStatus(e.target.value)
    }

  return (
    <form>
        <input onChange={handleChange} value={inputText}  type='text' className='input' ></input>
        <button onClick={handleClick} className='button'>
          <i className='fas fa-plus-square'></i> 
        </button>
        
            <select onChange={statusHandler} className='filter-todo'>
                <option>All</option>
                <option>Completed</option>
                <option>Uncompleted</option>
            </select>
     </form>
  )
}

export default Form