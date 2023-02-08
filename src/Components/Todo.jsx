
import { FaCheck, FaTrash } from 'react-icons/fa'

function Todo({text,todo, setTodos, todos}) {
 const deleteHandler = () =>{
        setTodos(todos.filter((el)=>el.id !== todo.id) )}
        
     const completeHandler= () =>{
        setTodos(todos.map((item)=>{
            if(item.id===todo.id){
            return{
                ...item, completed: !item.completed
            }
        }
        return item;
        }))
    }
        
 return (
    <div className='todo'>
        <li className={`todo-item ${todo.completed ? "completed" : " "}`}>{text}</li>
        <button onClick= {completeHandler} className='complete-btn'><i className='check'> <FaCheck /></i></button>
        <button onClick= {deleteHandler} className='delete-btn'><i className='trash'> <FaTrash /></i></button>
      
    </div>
  )
}

export default Todo