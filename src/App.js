import "./App.css";
import Card from "./components/UI/card/card.component";
import NewTodoItem from "./components/todos/new-todo/newTodo.component";
import React from "react";
import MainNavigation from "./components/navigation/NavigationLayout.component";


function App() {
 

  return (
    <div className="App">
      <MainNavigation>
         
           <Card>
          <NewTodoItem
            title="Encontrar Trabajo"
            description="Encontrar trabajo en Madrid creando aplicaciones para el web"
            fecha="03/07/2022"
          />
        </Card>
        
       
        <Card>
          <NewTodoItem
            title="Mudanza"
            description="Volvemos a España porque no podemos correr de nuestros problemas para siempre"
            fecha="03/15/2022"
          />
        </Card>
      
      </MainNavigation>
    </div>
  );
}

export default App;
