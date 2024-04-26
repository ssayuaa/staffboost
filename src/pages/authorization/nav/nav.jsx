import { Link } from 'react-router-dom';

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
        <div className="login">
          <Link to="/" className="secondaryBtn">
            Вход
          </Link>
          <select className="headerSelect" name="" id="">
          </select>
        </div>
      </header>

      <header className="headerMobile">
        <nav className="headerMobile__nav">
          <Link to="/" className="headerMobile__logo">
            <img className="headerMobile__firstImg" src="images/logo-1.svg" alt="Logo" />
            <img className="headerMobile__secondImg" src="images/logo-2.svg" alt="Logo" />
          </Link>
          <div className="account">
            <div className="login">
              <Link to="/" className="secondaryBtn">
                Вход
              </Link>
              <select className="headerSelect" name="" id="">
          
              </select>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
