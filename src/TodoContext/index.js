import React from 'react';
import {useLocalStorage} from './useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider(props){

    const {
        item:todos,
        saveItem:saveTodos,
         loading,
         error
        } = useLocalStorage('TODOS_V1',[]);
    
      const [searchValue,setSearchValue] = React.useState('');
      const [openModal,setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if(!searchValue.length>=1){
        searchedTodos = todos;
      }else{
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      }
    
      
    
      const completeTodos = (text) =>{
        const todoIndex = todos.findIndex(todo => todo.text == text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        //todos[todoIndex] = {
        //  text: todos[todoIndex].text,
        //  completed: text
        //};
        saveTodos(newTodos);
      }
    
      const deleteTodo = (text) =>{
        const todoIndex = todos.findIndex(todo => todo.text == text);
        const newTodos = [...todos];
        newTodos.splice (todoIndex,1); 
        saveTodos(newTodos);
      }

      const addTodo = (text) =>{
        const newTodos = [...todos];
        newTodos.push ({
            completed:false,
            text:text
        }); 
        saveTodos(newTodos);
      }
    
      console.log('render antes del use effect');
    
      // cuando hacemos efectos después de cargar html React.useLayoutEffect
      React.useEffect(()=>{
        console.log('use effect');
      },[totalTodos]);
    
      console.log('render después del use effect');

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal
        }} >
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };

//proveedor --> componente : envuelve toda la aplicación en app.js
//consumer  --> componente : este se usa en todas partes donde se necesita info de los estados compartidos