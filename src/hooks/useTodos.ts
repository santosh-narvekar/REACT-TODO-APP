import { useEffect, useState } from "react";
import { dummyData } from "../data/todos";
import { Todo } from "../types/todo";

function useTodos() {
  
  const [todos,setTodos] = useState(()=>{
    const savedTodos:Todo[] = JSON.parse(localStorage.getItem('todos') || "[]");
    return savedTodos.length > 0 ? savedTodos : dummyData
  }); 
  
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);

  function setToDoCompleted(id:number,completed:boolean){
    setTodos((prevTodos) => prevTodos.map(todo => (
      todo.id === id ? {...todo, completed} : todo
    )));
  }
  
  function addTodo(title:string){
    const newTodo:Todo = {
      // id:todos[todos.length - todos.length]?.id + 1 || 1,
      id:Date.now(),
      title,
      completed:false
    }
    console.log(newTodo)
    setTodos(prevTodos => [newTodo,...prevTodos]);
  }

  function deleteTodo(id:number){
    setTodos(prevTodos => prevTodos.filter(todo=>todo.id !== id))
  }

  function deleteAllCompletedTodos(){
    setTodos(prevTodos=>prevTodos.filter(todo => !todo.completed));
  }

  return {
    todos,
    setToDoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos
  }
}

export default useTodos
