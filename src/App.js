import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import Cards from './Cards';
import Nav from './Nav';
import BackgroundLogos from "./BackgroundLogos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Nav />
        </nav>
        <BackgroundLogos />
        <div id='main-div'>
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
          <button type="button" className="btn btn-light">Awesome!</button>
        </div>
      </header>
      <main>
        <Cards />
      </main>
    </div>
  );
}

export default App;
