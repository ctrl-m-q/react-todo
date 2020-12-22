import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Divider } from 'antd';
import { ToDoItem } from './ToDoItem';
import { ToDoForm } from './ToDoForm';

const token = 'a9c3c7ef5473589becf3fb31c7514f25a1c0cbdc';
const config = {
  headers: { Authorization: `Bearer ${token}` }
};

  export const ToDo = () => {
 
  const[todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(false);
  
  useEffect(async () => {
    const result = await axios.get(
      'https://api.todoist.com/rest/v1/tasks',
      config
    );
    setTodos(result.data);
  }, []);
  const [idCount, setIdCount] = useState(10);
  

  const renderTodoItems = (todos) => {
    return (
      <ul className="todo-list">
        { todos.map(todo => <ToDoItem 
            key={todo.id}
            item={todo}
            onRemove={onRemove} 
            onCheck={onCheck}
            edittodo = {editTodo}
            onEditTodo = {setEditTodo}
/>) 
         }
      </ul>
    )
  }

  const onRemove = (id) => {
    const index = todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
      axios.delete(
        `https://api.todoist.com/rest/v1/tasks/${id}`,
        config
      );
      todos.splice(index, 1);
      setTodos([...todos]);
    }
  }

  //a function to edit the task
  const editTodo = (id,rename) =>{
      const  edit = todos.map(todo => {
        if (id === todo.id){
          return {...todo,name : rename}
        }
        return todo;
      });
      setTodos(edit);
    }

  
  


  const onCheck = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    
    if (index !== -1) {
      const todo = todos[index];

      todo.checked = !todo.checked;
      todos.splice(index, 1, todo);

      setTodos([...todos]);
    }
  }

    const onSubmit = (name) => {
      const todo = {
        name,
        id: idCount,
        editTodo,
        checked: false
      };

      setTodos([...todos, todo]);
      setIdCount(idCount + 1);
    } 
    
    return (
      <Card title={'My todos'} className="todo-card">
        <ToDoForm onSubmit={onSubmit} />
        <Divider />
        { renderTodoItems(todos) }
        <Divider/>
      </Card>
    );
}