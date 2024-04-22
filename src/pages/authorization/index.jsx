import { Link, useNavigate } from 'react-router-dom';

import Footer from './footer/footer';
import Nav from './nav/nav';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './authorisation.sass';
import { setAuth } from '../../redux/authSlice/authSlice';

const Authorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const auth = JSON.parse(localStorage.getItem('auth'));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sendData = (e) => {
    e.preventDefault();
    if (auth.email === email && auth.password === password) {
      navigate('/');
      dispatch(setAuth(auth));
      console.log('dsafsdf');
    } else {
      setError('Данные введены неверно');
    }
  };
  return (
    <>
      <Nav />
      <section className="registration">
        <div className="registrationInner">
          <div className="registration__text">
            <h1 className="registration__title">Вход</h1>
            <p className="registration__subtitle">Please authorize to start using the platform</p>
            {error && <span style={{ color: 'red' }}>{error}</span>}
          </div>
          <form action="" onSubmit={sendData}>
            <div className="formInner">
              <div className="inputbox">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="emailexample@gmail.com"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="inputbox">
                <label htmlFor="psw">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="psw"
                  id="psw"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="primaryBtn">
                Log in
              </button>

              <p href="#" className="registration__link">
                Don’t have an account? <Link to="/registration">Sign up</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Authorization;
