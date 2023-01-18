import AddNewTodo from "./add-new-todo";
import TodoList from "./todo-list";
import Todo from "./todo";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default async function Page(){

  let res  = await fetch("https://kas-json-api.vercel.app/api/todo/list");
  const {todos} = await res.json();
  
  // console.log(todos);
  return (
    <>
    <div>
    <AddNewTodo/>    
      <ul style={{listStyleType:"none",padding:0}}>
        {todos.map((t:any)=> {
          return(<li key={t.id} style={{padding:"5px 0"}}>
            <Todo todo={t}/>
          </li>
          );
        })}
        
      </ul>
    </div>
    </>
  );
  return (
  <div>
    
    
  </div>
  );
}