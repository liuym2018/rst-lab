import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';

function App({ store }) {
  return (
    <div className="App">
      <Header />
      <Navigation />
    </div>
  );
}

export default App;
