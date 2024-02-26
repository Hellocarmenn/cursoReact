//import logo from './logo.svg'; la podemos eliminar
import './App.css';

//esto es un componente
function App() {
  const nombre = <h1>Hola de nuevo</h1>
  const edad = <p>27</p>
  const email = <div>carmen@gmail.com</div>
  const usuario = <div>{nombre}{edad}{email}</div>
  return (
    <div className="App">
    {nombre}
    <h1>Hola,mundo!</h1>
    {usuario}
    {usuario}
    </div>
  );
}

export default App;
