import { useState } from "react"


interface AddToFormProps{
  onSubmit:(title:string) => void;
}

function AddTodoForm({onSubmit}:AddToFormProps) {
  
  const [input,setInput] = useState('');
  
  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    if(!input.trim()) return;

    // Updating State via Callbacks
    onSubmit(input);

    // controlling input state over uncontrolled input
    setInput("")
  }

  return (
    
    <form className="flex" onSubmit={handleSubmit}>

      <input 
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="What needs to be done?"
      className="rounded-s-md grow border border-gray-400 p-2"
      />

      <button type='submit' className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800">
       Add
      </button>
    </form>
  )
}

export default AddTodoForm
