import React from "react";
import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/navigation/NavigationLayout.component";
import AllTodos from "./pages/AllTodosPage";
import ImportantTodo from "./pages/ImportantTodoPage";
import AddTodo from './pages/AddTodoPage';

function App() {
  return (
    <MainNavigation>
      <Routes>
        <Route path="/" element={<AllTodos />} />
        <Route path="/tareasImportantes" element={<ImportantTodo />} />
        <Route path="/añadirTarea" element={<AddTodo />} />
      </Routes>
    </MainNavigation>
  );
}

export default App;
