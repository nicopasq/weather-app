import './App.css';
import NavBar from './components/NavBar';
import CurrentWeather from './components/currentConditions/CurrentWeather';
import HourlyForecast from './components/hourlyForecast/HourlyForecast';
import SunAndMoon from './components/sunAndMoon/SunAndMoon';

function App() {

  return (
    <div>
      <SunAndMoon/>
      <NavBar />
      <CurrentWeather />
      <HourlyForecast/>
    </div>
  )
}

export default App;