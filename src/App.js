import "./App.css";
import React from "react";
import MainNavigation from "./components/navigation/NavigationLayout.component";

import AllTodos from "./pages/AllTodosPage";


function App() {
  return (
    <div className="App">
      <MainNavigation> 
       
      <AllTodos/>
      
      </MainNavigation>
      

    
    </div>
  );
}

export default App;
