import React from 'react';
import { connect } from 'react-redux';
import { Remove } from '../Redux/actions';
import '../App.css';
import './ToDo.css';

function ToDo(props) {

    const {dispatch } = props;
    const RemoveTodo = (id) => {
        dispatch({type: 'Remove' , id});
    }

    const ToDoItem = props.todos.map((todo, index) => (
        <li key={index}>
          <input type="checkbox" ></input>
          <p className='text'>{todo.title}</p>
          <button onClick={() => RemoveTodo(todo.id)} style={{border: 'none'}} className='remove'></button>
          <br />
        </li>
      ));

  return <div className="todos">
      <ul>{ToDoItem}</ul>
  </div>;
}

const mapStateToProps = (state) => {
    return {
        todos:state.todos,
        count:state.count
    };
};
export default connect(mapStateToProps)(ToDo);

