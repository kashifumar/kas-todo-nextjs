import Todo from "./todo";
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const getTodos = async () => {
  let res  = await fetch("https://kas-json-api.vercel.app/api/todo/list");
  const todos = await res.json();
  // console.log(todos);
  return todos;
}


export default async function TodoList(){
  const {todos} = await getTodos();
  // console.log(todos);
  return (
    <>
    <div>
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
}