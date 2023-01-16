import AddNewTodo from "./add-new-todo";
import TodoList from "./todo-list";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function Page(){
  return (
  <div>
    <AddNewTodo/>    
    <TodoList/>
  </div>
  );
}