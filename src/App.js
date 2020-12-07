import './App.scss';
import { Header } from './components/Header/Header';
import { Slider } from './components/Slider/Slider';
import { Main } from './components/Main/Main';
import { Popular } from './components/Popular/Popular';
import { Brands } from './components/Brands/Brands';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Main>
          <Slider />
          <Popular />
          <Brands />
        </Main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
