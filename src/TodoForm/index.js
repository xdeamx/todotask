import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoForm.css'

function TodoForm() {

    const [newTodoValue,setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onCancel  = () =>{
        setOpenModal(prevState => !prevState);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(newTodoValue!=""){
            addTodo(newTodoValue);
            setOpenModal(prevState => !prevState);
        }else{
            alert("debe agregar texto");
        }
    }

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Ingrese TODO</label>
            <textarea placeholder="generar tarea TFS..." value={newTodoValue} onChange={onChange}></textarea>
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-button-cancel TodoForm-button"
                >
                    Cancelar
                </button>
                <button
                  type="submit"
                  className="TodoForm-button-add TodoForm-button"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm};