//https://www.youtube.com/watch?v=SLfhMt5OUPI&ab_channel=WebDevSimplified

import './App.css';
import MainBanner from './Componentes/Header';
import NavBar from './Componentes/NavBar';

function App() {
  return (
    <div className="App">
      <div className='banner01'>
        <MainBanner />
        <NavBar />
      </div>
    </div>
  );
};

export default App;