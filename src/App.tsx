import './App.css';
import GamePage from './components/GamePage';
import Welcome from './components/Welcome';
import About from './components/About';
function App() {
  return (
    <div>
          <Welcome />
          <GamePage />
          <About/>
    </div>
  );
}

export default App;
