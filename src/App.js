import "./App.css";
import React from "react";
import ApplicationLayout from "./components/UI/layout/layout.component";
import AllTodos from "./pages/AllTodosPage";

function App() {
  return (
    <div className="App">
      <ApplicationLayout> <AllTodos/> </ApplicationLayout>
    </div>
  );
}

export default App;
