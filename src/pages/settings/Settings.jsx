import { Link } from 'react-router-dom';

import Nav from '../../components/nav/nav';
import Sidebar from '../../components/sidebar/sidebar';

import './settings.sass';

const Settings = () => {
  const pathImage = 'images/moon.svg';
  return (
    <div>
      <Nav />
      <div className="flex margin">
        <Sidebar indexActiveEl={4} />
        <div className="leftContent">
          <section className="alert">
            <div className="alert__text">
              <img src="images/alert-circle.svg" alt="Alert circle icon" />
              <span>
                В настоящее время ваша учетная запись не подтверждена, пожалуйста, предоставьте нам
                дополнительную информацию, чтобы начать пользоваться платформой
              </span>
            </div>
            <img className="alert__closeIcon" src="images/close.svg" alt="Close icon" />
          </section>

          <section className="registration margin-none">
            <div className="registration__wrapper">
              <div className="registration__userRow">
                <div className="registration__userInfo">
                  <div className="registration__userProfilePicture">
                    <img src={pathImage} alt="" />
                  </div>
                  <div className="registration__userWrapper">
                    <p className="registration__userName">Хадидже Мочиева</p>
                    <div className="registration__verificationStatus">
                      <span>Не подтвержден</span>
                      <img src="images/close-circle.svg" alt="Close circle icon" />
                    </div>
                  </div>
                </div>
                <Link to="/" className="secondaryBtn btn_hidden secondaryBtn_hidden">
                  Изменить фото
                </Link>
              </div>
              <form action="">
                <div className="formInner">
                  <div className="inputbox">
                    <label htmlFor="name">Полное имя (как в паспорте)</label>
                    <input
                      type="text"
                      placeholder="Хадидже Мочиева"
                      name="name"
                      id="name"
                      required
                    />
                  </div>

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

                  <div className="inputbox">
                    <label htmlFor="address">Местоположение (Город, Страна)</label>
                    <input
                      type="address"
                      placeholder="Введите свой адрес"
                      name="address"
                      id="address"
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
                      required
                    />
                  </div>

                  <div className="inputbox">
                    <label htmlFor="confirm_psw">Подтверждение пароля</label>
                    <input
                      type="password"
                      placeholder="Подтвердите пароль"
                      name="confirm_psw"
                      id="confirm_psw"
                      required
                    />
                  </div>

                  <div className="verification">
                    <div className="verification__text">
                      <span>Подтверждение</span>
                      <p>
                        В настоящее время ваша учетная запись не подтверждена, пожалуйста,
                        предоставьте нам дополнительную информацию для начала
                      </p>
                    </div>
                    <Link to="/" className="secondaryBtn secondaryBtn_lg">
                      {' '}
                      Подтвердите аккаунт{' '}
                    </Link>
                  </div>
                  <button type="submit" className="primaryBtn">
                    Сохранить изменения
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Settings;
