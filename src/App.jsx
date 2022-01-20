import React from "react";
import Form from './Component/Form'
import ToDo from "./Component/ToDo";
import { connect } from 'react-redux';
import { useState , useEffect } from 'react'

import './App.css';
import './Component/Todo.css';


function App(props) {
  const { toDo } = props;
  const [darkTheme, setDarkTheme] = useState(false) // to change the mood




  return (

      <div className={darkTheme ? 'dark-theme' : 'light-theme'}>       

        <nav></nav> 
        <div className="container">

       <div className="header">
       <h1>Todo</h1>
      <button onClick={() => setDarkTheme(prevTheme => !prevTheme)}><img/> </button>
        </div>
      <Form />
      <ToDo/>
      </div>
      </div>

  )};

const mapStateToProps = (state) => {
  return {
      toDo:state.todos
  };
};

export default connect(mapStateToProps)(App);

