import React from 'react';
import { Button, Checkbox } from 'antd';
import { useState } from 'react';

export const ToDoItem = (props) => {
  const { item, onCheck, onRemove, setEditTodo, editTodo } = props;
  const onRemoveItem = (e) => {
    e.preventDefault();

    if (onRemove) {
      onRemove(item.id);
    }
  }

  const onCheckItem = () => {
    if (onCheck) {
      onCheck(item.id);
    }
  }
  

  return (
    <li className="todo-item" key={item.id}>
      <Checkbox 
        checked={item.checked}
        onChange={onCheckItem}
      >{item.content}</Checkbox>
      <Button onClick={onRemoveItem}>Remove</Button>
      
      <Button htmlType="button" onClick = {() => setEditTodo(true)}> 
          Edit <span className="visually-hidden">{props.name}</span>
        </Button>
        
    )
    
    </li>
  )
}
 //{/* onClick = {() => setedittodo()}