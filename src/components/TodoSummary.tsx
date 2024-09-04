import { Todo } from "../types/todo"

interface TodoSummaryProps{
  todos: Todo[],
  deleteAllCompleted:()=>void
}

function TodoSummary({todos,deleteAllCompleted}:TodoSummaryProps){
  const completedTodos = todos.filter(todo=>todo.completed);

  return (
    <div className="text-center space-y-2"> 
      <p className="text-sm font-medium">
        {completedTodos.length}/{todos.length} todos completed
      </p>
      {
        completedTodos.length > 0 && (<button onClick={deleteAllCompleted} className="text-red-500 hover:underline text-sm font-medium">
          Delete all Completed
        </button>)
      }
    </div>
  )
}

export default TodoSummary
