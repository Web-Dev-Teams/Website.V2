import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Photos from './components/Photos/Photos';
import Aboutuws from './components/Aboutuws/Aboutuws'
import FirstAward from './components/FirstAward/FirstAward';

function App() {
  return (
    <div>

      <Header/>
      <Photos/>
      <Aboutuws/>
      <FirstAward/>
      <Footer/>
    </div>

  );
}

export default App;
