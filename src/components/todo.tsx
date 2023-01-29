"use client";
import { useRouter } from "next/navigation";
import {update, deleteTodo} from "./todo-lib";

export default function Todo({todo}:any) {
  const router = useRouter();
  return (
    <div className={"row"}>
      <div className={"col-3"}></div>
      <div className={"col-1"}>
        <input type="checkbox" onChange={(e)=>update(todo.id, e.target.checked, router.refresh)} checked={todo.isDone}/>
      </div>
      <div className={"col-4"}>
        <span>{todo.name}</span>
      </div>
      <div className={"col-1"}>
        <button type="button" className={"btn btn-sm btn-danger"} onClick={(e)=>deleteTodo(todo.id, router.refresh)}>X</button>
      </div>
    </div>
  );
}