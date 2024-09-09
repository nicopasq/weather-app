import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CurrentWeather from './components/currentConditions/CurrentWeather';


function App() {

  return (
    <div>
      <NavBar/>
      <CurrentWeather/>
    </div>
  )
}

export default App;