// SettingsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Todo.css';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const Todo = () => {
    const [todoItems, setTodoItems] = React.useState(
        [{todo: 'Prep for the day',
        complete: false}])

const createTodoItem = (todo) => {
    if (todoItems.length >= 5) {
    console.log("You can't add more than 5 items.");
    return;}
    const newTodoItems = [...todoItems, { todo, complete: false }];
    setTodoItems(newTodoItems);
};

const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems]
    newTodoItems.splice(index, 1)
    setTodoItems(newTodoItems)
    }
    
  return (
    <div className = "backgroundtodo">
        <div className="image2">
    <iframe src="https://giphy.com/embed/BBXspvWaUmWfRoBsEF" width="180" height="180" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </div>
    <div className = "">
    <div className = "background tieittogether">
        <div className = "title">
            <code>To-do List</code>
        </div>
        <div className= "applicationtodo">
        <div className= "input">
        <TodoInput className = "bar" createTodoItem={createTodoItem} />
        </div>
        <code>
        {todoItems.map((item, index) => (
        <TodoItem key={index} index={index} item={item} deleteTodoItem={deleteTodoItem}/>
        ))}
        </code>
        </div>
        <div className = "button2">
      <Link to="/">
        <button className = "custom-button goback">
        <FontAwesomeIcon icon={faCog} />
        </button>
      </Link>
      </div>
      </div>
      </div>
      <div className="image">
    <iframe src="https://giphy.com/embed/BBXspvWaUmWfRoBsEF" width="180" height="180" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </div>
    </div>
  );
};

export default Todo;
