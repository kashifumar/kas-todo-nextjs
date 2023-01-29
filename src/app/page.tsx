import AddNewTodo from "@/components/add-new-todo";
import TodoList from "@/components/todo-list";
import Link from 'next/link'

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

    <div className={"row"}>
      <div className={"col-12 text-center"}>
      <strong>
          <Link href="https://github.com/kashifumar/kas-todo-nextjs">Github Project Repo</Link>
        </strong>
      </div>
    </div>

    </main>
    </div>    
    <footer className={"app-footer row"}>
      <div className={"col-12 text-center"}>
        <strong>
          <Link href="https://github.com/kashifumar">Kashif Umar</Link><span>&copy; 2023.</span>
        </strong>
      </div>
        
    </footer>
    </>
  );
}