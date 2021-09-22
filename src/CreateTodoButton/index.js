import React from 'react'
import './CreateTodoButton.css'



function CreateTodoButton(props){

    const clickF= () => {
        console.log("Hola");
        console.log("Soy una función que está siendo guardada dentro de una variable UwU");
       // props.setOpenModal(!props.openModal);
       props.setOpenModal(prevState => !prevState);
    };

    return(
        <button 
            className="CreateTodoButton"
            onClick={clickF}
        >+</button> 
    );
}

export { CreateTodoButton };