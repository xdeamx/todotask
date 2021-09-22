import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'


function TodoSearch(){

    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    
    const onChangeText = (event) =>{
        let valueText = event.target.value;
       // if(valueText.length>2){
            console.log(valueText);
            setSearchValue(valueText);
        //}
     };

    return[
        <input 
         className="TodoSearch" 
         placeholder="ingrese búsqueda.."
         value={searchValue}
         onChange={onChangeText}
         ></input>,
         <p>{searchValue}</p>
    ];
}

export { TodoSearch };