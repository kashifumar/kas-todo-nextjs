export interface TodoI {
  id: string;
  name: string;
  isDone: boolean;
}

export async function getTodos(){
  let res  = await fetch("https://kas-json-api.vercel.app/api/todo/list");
  const todos: TodoI[] = await res.json();
  return todos;
}

export async function add(name:string, refresh:()=>void){
  await fetch("/api/todo/add",{
    method:'POST',
    mode:'no-cors',
    body: JSON.stringify({name})
  });
  refresh();
}

export async function update(id:string, isDone:boolean, refresh:()=>void){
  await fetch("/api/todo/update",{
    method:'POST',
    mode:'no-cors',
    body: JSON.stringify({id, isDone})
  });
  refresh();
}

export async function deleteTodo(id:string, refresh:()=>void){
  await fetch(`/api/todo/delete?id=${id}`,{
    method:'DELETE',

  });
  refresh();
}
