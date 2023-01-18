"use client";
import { useRouter } from "next/navigation";

export interface TodoI {
  id: string;
  name: string;
  isDone: boolean;
}

async function update(id:string, isDone:boolean, refresh:()=>void){
  await fetch("/api/todo/update",{
    method:'POST',
    mode:'no-cors',
    body: JSON.stringify({id, isDone})
  });
  refresh();
}

async function delete_todo(id:string, refresh:()=>void){
  await fetch(`/api/todo/delete?id=${id}`,{
    method:'DELETE',

  });
  refresh();
}
export default function Todo({todo}:{todo:TodoI}) {
  const router = useRouter();
  return (
    <>
    <input type="checkbox" onChange={(e)=>update(todo.id, e.target.checked, router.refresh)} checked={todo.isDone}/>
    <span>{todo.name}</span>
    <button type="button" onClick={(e)=>delete_todo(todo.id, router.refresh)}>Delete</button>
    </>
  );
}