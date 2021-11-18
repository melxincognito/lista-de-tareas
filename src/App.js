import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header'>Lista de Tareas</header>
      <div className='content'>
        <div className='myLists'> 
          <button> Add List </button> 
          <h3> Tareas </h3>
          <h3> De Casa </h3>
          <h3> Peques </h3>
        </div>
        <div className='todos'> 
          <h2> Mi Lista </h2>
          <p> Haz esto </p>
        </div>
        <div className='finishedTodos'> 
          <h2> Terminado </h2>
          <p> Ya hicistes esto </p>
        </div>
      </div>
    </div>
  );
}

export default App;
