import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MyMainSvg from '../../assets/svg/sidebar/MyMainSvg';
import TeamSvg from '../../assets/svg/sidebar/TeamSvg';
import RatingSvg from '../../assets/svg/sidebar/RatingSvg';
import MessagesSvg from '../../assets/svg/sidebar/MessagesSvg';
import SettingsSvg from '../../assets/svg/sidebar/SettingsSvg';
import SignOutSvg from '../../assets/svg/SignOutSvg';
import DeskSvg from '../../assets/svg/sidebar/DeskSvg';


import { setAuth } from '../../redux/authSlice/authSlice';

import './sidebar.sass';

const Sidebar = ({ indexActiveEl }) => {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(setAuth(''));
    localStorage.removeItem('activeEmail');
  };
  return (
    <div>
      <div className="sidebar">
        <div>
          <Link to="/"
          className={`sidebar__link ${indexActiveEl === 0 && 'sidebar__link_active'}`}>
            <span className="sidebar__icon">
              <MyMainSvg active={indexActiveEl === 0 && true} />
            </span>
            <span>Главная</span>
          </Link>

          <Link
            to="/tasks"
            className={`sidebar__link ${indexActiveEl === 1 && 'sidebar__link_active'}`}>
            <span className="sidebar__icon">
              <DeskSvg active={indexActiveEl === 1 && true} />
            </span>
            <span>Доска</span>
          </Link>

          <Link
            to="/team"
            className={`sidebar__link ${indexActiveEl === 2 && 'sidebar__link_active'}`}>
            <span className="sidebar__icon">
              <TeamSvg active={indexActiveEl === 2 && true} />
            </span>
            <span>Сотрудники</span>
          </Link>

          <Link
            to="/rating"
            className={`sidebar__link ${indexActiveEl === 7 && 'sidebar__link_active'}`}>
            <span className="sidebar__icon">
              <RatingSvg active={indexActiveEl === 7 && true} />
            </span>
            <span>Рейтинг</span>
          </Link>

          <Link
            to="/chats"
            className={`sidebar__link ${indexActiveEl === 3 && 'sidebar__link_active'}`}>
            <span className="sidebar__icon">
              <MessagesSvg active={indexActiveEl === 3 && true} />
            </span>
            <span>Сообщения</span>
          </Link>

          <Link
            to="/settings"
            className={`sidebar__link ${indexActiveEl === 4 && 'sidebar__link_active'}`}>
            <span className="sidebar__icon">
              <SettingsSvg active={indexActiveEl === 4 && true} />
            </span>
            <span>Настройки</span>
          </Link>
        </div>

        <div className="sidebar__out">
          <div onClick={handleSignOut}>
            <Link to="/authorization" className={`sidebar__link ${indexActiveEl === 6}`}>
              <span className="sidebar__icon">
                <SignOutSvg />
              </span>
              <span>Выход</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="sidebarMobile">
        <Link to="/">
          <MyMainSvg active={indexActiveEl === 0 && true} />
        </Link>
        <Link to="/tasks">
          <DeskSvg active={indexActiveEl === 1 && true} />
        </Link>
        <Link to="/team">
          <TeamSvg active={indexActiveEl === 2 && true} />
        </Link>
        <Link to="/rating">
          <RatingSvg active={indexActiveEl === 7 && true} />
        </Link>
        <Link to="/chats">
          <MessagesSvg active={indexActiveEl === 3 && true} />
        </Link>
        <Link to="/settings">
          <SettingsSvg active={indexActiveEl === 4 && true} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
