import logo from '../logo.svg';
//import './App.css';
import React from 'react'


import {TodoProvider} from '../TodoContext';
import {AppUI} from './AppUI'

/*const deFaulttodos =[
  {text : "Cortarcebolla", completed:false },
  {text : "cantar", completed:false },
  {text : "programar", completed:false }
];*/


function App(props) {


  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
