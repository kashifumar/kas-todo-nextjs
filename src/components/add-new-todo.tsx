"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {add} from "./todo-lib";

export default function AddNewTodo(){
  const router = useRouter();
  let [name, setName] = useState("");
  return (
    <div className={"card"}>
    <div className={"card-body"}>
      <div className={"row"}>
        <div className={"col-4 mt-2 mb-2"}></div>
        <div className={"col-2 mt-2 mb-2"}>
          <input type="text" className={""} placeholder="Type Your Task" onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className={"col-2 mt-2 mb-2"}>
          <button className={"btn btn-sm btn-facebook"} type="button" onClick={async (e)=>{
        await add(name, router.refresh);
        setName("");
      }}>Add</button>
    </div>
        </div>
      </div>
    </div>
  );

}