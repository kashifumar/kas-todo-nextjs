import {TodoI, getTodos} from "./todo-lib";
import Todo from "./todo";

export default async function TodoList(){
  const {todos}:any = await getTodos();
  return (
    <div className={"card"}>
    <div className={"card-body"}>
      <div className={"row"}>
        <div className={"col-4 mt-2 mb-2"}></div>
        <div className={"col-4 mt-2 mb-2"}>
          <ul style={{listStyleType:"none",padding:0}}>
        {todos.map((t:any)=> {
          return(<li key={t.id} style={{padding:"5px 0"}}>            
            <Todo todo={t}/>
          </li>
          );
        })}
        
        </ul>
          </div>
        </div>
      </div>
    </div>
  );
}