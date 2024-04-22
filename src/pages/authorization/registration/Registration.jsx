import { Link, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Nav from '../nav/nav';

import { useState } from 'react';

import './registration.sass';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [password2, setPassword2] = useState('');
  const navigate = useNavigate();
  const sendData = (e) => {
    e.preventDefault();
    if (password === password2) {
      localStorage.setItem(
        'auth',
        JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      );

      navigate('/authorization');
    }
  };
  console.log(role);
  return (
    <>
      <Nav />
      <section className="registration">
        <div className="registrationInner">
          <div className="registration__text">
            <h1 className="registration__title">Sign up</h1>
          </div>
          <form onSubmit={sendData}>
            <div className="formInner">
              <div className="inputbox">
                <label htmlFor="name">Full name (as in passport)</label>
                <input
                  type="text"
                  placeholder="Khalid Umalatov"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

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

              <div className="inputbox">
                <label htmlFor="confirm_psw" className="flex-sb">
                  Confirm password
                  {password !== password2 && (
                    <span style={{ color: 'red', opacity: '.9' }}>Password mismatch!</span>
                  )}
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="confirm_psw"
                  id="confirm_psw"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  required
                />
              </div>
              <div>Роль: </div>
              <div className="checkboxEl_flex">
                <div className="checkboxEl">
                  <input
                    type="radio"
                    name="checkbox"
                    id="checkbox"
                    value="employee"
                    onChange={(e) => setRole(e.target.value)}
                    required
                  />
                  <label htmlFor="checkbox">Сотрудник</label>
                </div>
                <div className="checkboxEl">
                  <input
                    type="radio"
                    name="checkbox"
                    id="checkbox2"
                    value="director"
                    onChange={(e) => setRole(e.target.value)}
                    required
                  />
                  <label htmlFor="checkbox2">Руководитель</label>
                </div>
              </div>
              <button type="submit" className="primaryBtn">
                Sign up
              </button>
              <p className="registration__link">
                Already have an account? &nbsp;
                <Link to="/authorization">Log in</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Registration;
