"use client";
import { useRouter } from "next/navigation";
import {update, deleteTodo} from "./todo-lib";

export default function Todo({todo}:any) {
  const router = useRouter();
  return (
    <>
    <input type="checkbox" onChange={(e)=>update(todo.id, e.target.checked, router.refresh)} checked={todo.isDone}/>
    <span>{todo.name}</span>
    <button type="button" onClick={(e)=>deleteTodo(todo.id, router.refresh)}>Delete</button>
    </>
  );
}