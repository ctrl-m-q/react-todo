import React from 'react';
import { Form, Input, Button } from 'antd';
import { ToDo } from './ToDo';

export const ToDoForm = (props) => {
  const { onSubmit, editTodo, setEditTodo } = props;
  const [form] = Form.useForm();
  const onFinish = (values) => {
    if (onSubmit) {
      onSubmit(values.name);
    }
    form.resetFields();
  }
  
    
  return (
      <Form className="todo-form" form={form} layout={'inline'} onFinish={onFinish}>
        <Form.Item name="name" className="todo-form-input">
          <Input placeholder={'New todo'} />
        </Form.Item>
        <Form.Item className="todo-form-actions">
          <Button htmlType="submit" type="primary">Add</Button>
        </Form.Item>
      <Form.Item className="todo-edit">
          <div className="form-group">
          <label className="todo-label" htmlFor={props.id}>
            Enter New name:{props.name}
          </label>
          <input id={props.id} />
        </div>
        <div className="btn-group">
        <Button HtmlType="button"  className="todo-cancel">
            Cancel
            <span className="visually-hidden"> {props.name}</span>
          </Button>
          <Button HtmlType="submit" className="btn btn__primary todo-edit">
            Save 
            <span className="visually-hidden">{props.name}</span>
          </Button>
         
        </div>
        </Form.Item>

    </Form>
  )
}

{/* <div/>
  onClick = {() => setedittodo(false)}
          <label className="todo-label" htmlFor={ToDo.id}>
            New name {props.name}</label>
          <Input placeholder={props.id}/>
        <div/>
          <Button htmlType = "button">
            Cancel
            <span> renaming {ToDo.name}</span></Button>
          <Button Htmltype="submit">
            Save
            <span> new name{ToDo.name}</span></Button> */}