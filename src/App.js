import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Settings from './pages/settings/Settings';
import Authorization from './pages/authorization';
import Password from './pages/authorization/password/password';
import Registration from './pages/authorization/registration/Registration.jsx';
import Tasks from './pages/tasks/tasks.jsx';
import Chats from './pages/chats/Chats';
import Project from './pages/project/Project';

const App = () => {
  const auth = useSelector((state) => state.auth.auth);
  console.log(auth);
  return (
    <Routes>
      <Route path="/" element={auth ? <Project /> : <Navigate to="/authorization" />} />
      <Route path="/tasks" element={auth ? <Tasks /> : <Navigate to="/authorization" />} />
      <Route path="/chats" element={auth ? <Chats /> : <Navigate to="/authorization" />} />
      <Route path="/settings" element={auth ? <Settings /> : <Navigate to="/authorization" />} />
      <Route path="/authorization" element={!auth ? <Authorization /> : <Navigate to="/" />} />
      <Route path="/authorization/password" element={!auth ? <Password /> : <Navigate to="/" />} />
      <Route path="/registration" element={!auth ? <Registration /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default App;
