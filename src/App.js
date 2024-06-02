import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Settings from './pages/settings/Settings';
import Authorization from './pages/authorization';
import Registration from './pages/authorization/registration/Registration.jsx';
import Tasks from './pages/tasks/tasks.jsx';
import Chats from './pages/chats/Chats';
import Project from './pages/project/Project';
import Team from './pages/team/team.jsx';
import Rating from './pages/rating/Rating.jsx';
import Aside from './components/aside/aside.jsx';
import Nav from './components/nav/nav.jsx';

const App = () => {
  const auth = useSelector((state) => state.auth.auth);
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      localStorage.setItem(
        'auth',
        JSON.stringify(
          JSON.parse(localStorage.getItem('auth')).map((item) =>
            item.email === auth.email ? auth : item,
          ),
        ),
      );
    }
  }, [auth]);
  return (
    <div>
      <Aside isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} />
      <Nav setIsAsideOpen={setIsAsideOpen} />
      <Routes>
        <Route path="/" element={auth ? <Project /> : <Navigate to="/authorization" />} />
        <Route path="/tasks" element={auth ? <Tasks /> : <Navigate to="/authorization" />} />
        <Route path="/chats" element={auth ? <Chats /> : <Navigate to="/authorization" />} />
        <Route path="/settings" element={auth ? <Settings /> : <Navigate to="/authorization" />} />
        <Route path="/team" element={auth ? <Team /> : <Navigate to="/authorization" />} />
        <Route path="/rating" element={auth ? <Rating /> : <Navigate to="/authorization" />} />
        <Route path="/authorization" element={auth ? <Navigate to="/" /> : <Authorization />} />
        <Route path="/registration" element={auth ? <Navigate to="/" /> : <Registration />} />
      </Routes>
    </div>
  );
};

export default App;
