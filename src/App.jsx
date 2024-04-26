import Header from './layout/header/header';
import Tasks from './pages/tasks/tasks';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex">
        <div>навигация</div>
        <div className="content">
          <Tasks />
        </div>
      </div>
    </div>
  );
}

export default App;
