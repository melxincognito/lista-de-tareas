import React from "react";
import Card from '../components/UI/card/card.component';
import NewTodoItem from '../components/todos/newTodo.component'


function AllTodos() {
    const myTodosData = [
        {
            id: '1', 
            title: 'Conseguir Trabajo', 
            description: 'Conseguir Trabajo en Madrid creando aplicaciones para el web', 
            fecha: '03/07/2022'
        }, 
        {
            id: '2', 
            title: 'Mudanza', 
            description: 'Volver a Madrid porque no podemos seguir viviendo aquí cuando tu vida sigúe aya', 
            fecha: '03/15/2022'
        }

    ]


  return (
   <section> 
       <h1> Tareas </h1>
       {myTodosData.map((tarea) => {
        return (
            <Card>
                <NewTodoItem title={tarea.title} description={tarea.description} fecha={tarea.fecha}/>
            </Card>
        )
       })}
   </section>
  );
}

export default AllTodos;
