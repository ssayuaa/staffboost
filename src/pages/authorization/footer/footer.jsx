import { Link } from 'react-router-dom';

import './footer.sass';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">StaffBoost &#169; 2024</p>
      <div className="footer__text">
        <div className="footer__contact">
          <a href="#">mochievakh16@bk.ru</a>
          <a href="#">+7 (929) 8886 710</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
