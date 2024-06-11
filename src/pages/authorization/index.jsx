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
    if (
      auth &&
      auth.some((item) => item.email === email) &&
      auth.some((item) => item.password === password)
    ) {
      navigate('/');
      localStorage.setItem('activeEmail', email);
      dispatch(setAuth(auth.filter((item) => item.email === email)[0]));
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
            <p className="registration__subtitle">
              Пожалуйста, авторизуйтесь, чтобы начать пользоваться платформой
            </p>
            {error && <span style={{ color: 'red' }}>{error}</span>}
          </div>
          <form action="" onSubmit={sendData}>
            <div className="formInner">
              <div className="inputbox">
                <label htmlFor="email">Почта</label>
                <input
                  type="text"
                  placeholder="email@mail.com"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="inputbox">
                <label htmlFor="psw">Пароль</label>
                <input
                  type="password"
                  placeholder="Введите свой пароль"
                  name="psw"
                  id="psw"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="primaryBtn">
                Войти
              </button>

              <p href="#" className="registration__link">
                У Вас нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
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
