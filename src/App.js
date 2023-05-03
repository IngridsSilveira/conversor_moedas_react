import './App.css';
// import Conversor from './componentes/Conversor';
import ConversorF from './componentes/ConversorF';


function App() {
  return (
    <div className="App">
      <h1>Conversor de moedas</h1>
      <div className='linha'>
      <ConversorF moedaA="USD" moedaB="BRL" />
      <ConversorF moedaA="BRL" moedaB="USD" />
      </div>
      <div className='linha'>
      <ConversorF moedaA="USD" moedaB="EUR" />
      <ConversorF moedaA="EUR" moedaB="USD" />
      </div>
      <div className='linha'>
      <ConversorF moedaA="CAD" moedaB="BRL" />
      <ConversorF moedaA="BRL" moedaB="CAD" />
      </div>
      <footer>
        <p>Feito por <a href='https://ingriddev.netlify.app/'>Ingrid Souza</a></p>
      </footer>
    </div>
  );
}

export default App;
