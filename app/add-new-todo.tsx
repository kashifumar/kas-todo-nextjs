"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

async function addTodo(name:string, refresh:()=>void){
  await fetch("/api/todo/add",{
    method:'POST',
    mode:'no-cors',
    body: JSON.stringify({name})
  });
  refresh();
}

export default function AddNewTodo(){
  const router = useRouter();
  let [name, setName] = useState("");
  return (
    <div>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <button type="button" onClick={async (e)=>{
        await addTodo(name, router.refresh);
        setName("");
      }}>Add</button>
    </div>
  );

}