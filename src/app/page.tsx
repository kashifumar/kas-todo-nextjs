import AddNewTodo from "@/components/add-new-todo";
import TodoList from "@/components/todo-list";

export default function Page(){
  return (
    <>
    <header>
      <h1 className={"text-center"}>Welcome to The TODO App</h1>
    </header>
    <div className={"app-body"}>
      <main className={"main"}>
    <AddNewTodo/>    
    {/* @ts-expect-error Server Component */}
    <TodoList/>
    </main>
    </div>    
    <footer className={"app-footer"}>
      <div>
        <a href="https://github.com/kashifumar">Kashif Umar</a><span>&copy; 2023.</span>
      </div>        
    </footer>
    </>
  );
}