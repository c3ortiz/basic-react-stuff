import './App.css';
import Mensaje from './Mensaje.js'

const Descripcion = () => {
  return (
    <div>
      <p>En construcción...</p>
    </div>
  );
}

const Suma = (props) => {
  return (
    <div>
      <h1>{props.a + props.b}</h1>
    </div>
  );
}

const App = () => {
  
  return (
    <div className="App">
        <Mensaje msg='Estoy' color='#FF5733'/>
        <Mensaje msg='hecho en' color='#33C4FF'/>
        <Mensaje msg='React' color='#594544'/>
        <Descripcion />
        <Suma a={1} b={2} />
    </div>
  );

}

export default App;
