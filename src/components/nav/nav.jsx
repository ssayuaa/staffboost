import { Link } from 'react-router-dom';
import './nav.sass';

const Nav = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link to="/" className="logo">
            <img src="images/logo1.png" alt="Logo" />
            <img src="images/logo2.png" alt="Logo" />
          </Link>
        </nav>
        <div className="account">
          <div className="account__notification">
            <img src="images/notification.svg" alt="Notification icon" />
            <img
              className="account__notificationDot"
              src="images/notification-dot.svg"
              alt="Notification icon"
            />
          </div>
          <div className="account__inner">
            <Link to="/" className="account__profilePicture">
              <img src="images/moon.svg" alt="Profile pictire" />
            </Link>
            <div className="account__userInfo">
              <div className="account__userName">Хадидже Мочиева</div>
              <div className="account__userLicenseId">mochievakh16@bk.ru</div>
            </div>
          </div>
        </div>
      </header>
      <header className="headerMobile">
        <nav className="headerMobile__nav">
          <Link to="/" className="headerMobile__logo">
            <img className="headerMobile__firstImg" src="images/logo-1.svg" alt="Logo" />
            <img className="headerMobile__secondImg" src="images/logo-2.svg" alt="Logo" />
          </Link>
          <div className="account">
            <div className="account__notification">
              <img src="images/notification.svg" alt="Notification icon" />
              <img
                className="account__notificationDot"
                src="images/notification-dot.svg"
                alt="Notification icon"
              />
            </div>
            <div className="account__inner">
              <Link to="/" className="account__profilePicture">
                <img src="/src/assets/img/Ellipse 1.png" alt="Profile pictire" />
              </Link>
            </div>
            <select className="headerSelect" name="" id=""></select>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
