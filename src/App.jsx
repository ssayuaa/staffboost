import Header from './layout/header/header';
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex">
        <div>навигация</div>
        <div className="content">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
