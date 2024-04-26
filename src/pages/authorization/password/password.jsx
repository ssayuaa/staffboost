import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Nav from '../nav/nav';

const Password = () => {
  return (
    <>
      <Nav />
      <section className="registration">
        <div className="registrationInner">
          <div className="registration__text">
            <h1 className="registration__title">Забыли пароль?</h1>
            <p className="registration__subtitle">
            Пожалуйста, введите свой адрес электронной почты для инструкции по сбросу настроек
            </p>
          </div>
          <form action="">
            <div className="formInner">
              <div className="inputbox">
                <label htmlFor="email">Почта</label>
                <input
                  type="text"
                  placeholder="email@mail.com"
                  name="email"
                  id="email"
                  required
                />
              </div>

              <button type="submit" className="primaryBtn">
                Отправить инструкцию по сбросу
              </button>

              <p href="#" className="registration__link">
                У вас нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Password;
