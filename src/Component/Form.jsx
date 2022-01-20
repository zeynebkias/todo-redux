import React from 'react';
import { connect,useDispatch,useSelector } from 'react-redux';
import { useState } from 'react'
import '../App.css';
import './ToDo.css';



function Form(props) {
    const dispatch=useDispatch()
    const [toDo, setToDoText] = useState({title:""})
    
    const getValue = (e) => {
        setToDoText({ title: e.target.value, id: Math.floor(Math.random() * 100), completed: false })
    }
    const printValue = (e) => {
        e.preventDefault();
        dispatch({ type: 'Add', todos:toDo })
        setToDoText({ title:""})
        
    }
    return  <div className="todo-input">
    <form onSubmit={printValue} > 
        <input type="text" name="" id="" value={toDo.title} onChange={getValue} placeholder="Create a new todo..." />
        <button type='submit' value="Add"></button>

    </form>
    </div>
}

const mapStateToProps = (state) => {
    return {
        toDo:state.todos,
        count:state.count
    };
};
export default connect(mapStateToProps)(Form)

