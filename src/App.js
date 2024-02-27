//import logo from './logo.svg'; la podemos eliminar
//importando css
import './App.css';
//exportando componente usuario
import { Usuario, Usuario2, Usuario3 } from './components/Usuario';
import { Card } from './components/card';


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

      <MostrarNombreComponente />
      <Usuario />
      <Usuario />
      <Usuario />
      <Usuario2 nombre="Maria" edad={67} nacionalidad="Mexico" />
      <Usuario3 nombre="Ricardo" />
      <Card></Card>
    </div>

  );
}

//esto es un componente, el nombre siempre debe empezar en mayusculas
const MostrarNombreComponente = () => {
  return <h1>Carmen</h1>
}

export default App;
