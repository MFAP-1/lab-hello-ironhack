import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import Cards from './Cards';
import Nav from './Nav';
import BackgroundLogos from "./BackgroundLogos";
import MainContent from "./MainContent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <BackgroundLogos />
        <MainContent />
      </header>
      <main>
        <Cards />
      </main>
    </div>
  );
}

export default App;
