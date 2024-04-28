import { Link } from 'react-router-dom';
import Nav from '../../components/nav/nav';
import Sidebar from '../../components/sidebar/sidebar';

import './team.sass';

const Team = () => {
  return (
    <div>
      <Nav />
      <div className="content">
        <Sidebar indexActiveEl={0} />
        <section className="team">
          <div className='team__teams'>
            <div className="team-col">
            <div className="team__Col">Сотрудники</div>
            <div className="team__userRow">
                <Link href="#" className="team__userProfilePicture">
                  <img src="images/pp7.svg" alt="" />
                </Link>
                <div className="team__userInfoCol">
                  <div className="team__userNameRow">
                    <span className="team__name">
                    Deniel Hawkins
                    </span>
                  </div>
                  <div className="team__jobRow">
                    <span className="team__job">
                      Руководитель проекта {' '}
                    </span>
                  </div>
                </div>
                <div className='teamBtn'>
                  <button type="submit" className="teamBtn__second">
                    Написать сообщение
                </button>
                </div>
              </div>
              <div className="team__userRow">
                <Link href="#" className="team__userProfilePicture">
                  <img src="images/pp3.svg" alt="" />
                </Link>
                <div className="team__userInfoCol">
                  <div className="team__userNameRow">
                    <span className="team__name">Джейн Купер</span>
                  </div>
                  <div className="team__jobRow">
                    <span className="team__job">
                  Backend-разработчик {' '}
                    </span>
                  </div>
                </div>
                <div className='teamBtn'>
                  <button type="submit" className="teamBtn__second">
                    Написать сообщение
                </button>
                </div>
              </div>
              <div className="team__userRow">
                <Link href="#" className="team__userProfilePicture">
                  <img src="images/pp5.svg" alt="" />
                </Link>
                <div className="team__userInfoCol">
                  <div className="team__userNameRow">
                    <span className="team__name">Петимат Гишларкаева</span>
                  </div>
                  <div className="team__jobRow">
                    <span className="team__job">
                    Главный специалист
                    </span>
                  </div>
                </div>
                <div className='teamBtn'>
                  <button type="submit" className="teamBtn__second">
                    Написать сообщение
                </button>
                </div>
              </div>
              <div className="team__userRow">
                <Link href="#" className="team__userProfilePicture">
                  <img src="images/pp1.svg" alt="" />
                </Link>
                <div className="team__userInfoCol">
                  <div className="team__userNameRow">
                    <span className="team__name">Крунгян Марина</span>
                  </div>
                  <div className="team__jobRow">
                    <span className="team__job">Дизайнер</span>
                  </div>
                </div>
                <div className='teamBtn'>
                  <button type="submit" className="teamBtn__second">
                    Написать сообщение
                </button>
                </div>
              </div>
              <div className="team__userRow">
                <Link href="#" className="team__userProfilePicture">
                  <img src="images/pp6.svg" alt="" />
                </Link>
                <div className="team__userInfoCol">
                  <div className="team__userNameRow">
                    <span className="team__name">
                      Aiza Zyazikova 
                    </span>
                  </div>
                  <div className="team__jobRow">
                    <span className="team__job">
                    Рилсмейкер
                    </span>
                  </div>
                </div>
                <div className='teamBtn'>
                  <button type="submit" className="teamBtn__second">
                    Написать сообщение
                </button>
                </div>
              </div>
              <div className="team__userRow">
                <Link href="#" className="team__userProfilePicture">
                  <img src="images/pp4.svg" alt="" />
                </Link>
                <div className="team__userInfoCol">
                  <div className="team__userNameRow">
                    <span className="team__name">
                      Севиль Уильямсон
                    </span>
                  </div>
                  <div className="team__jobRow">
                    <span className="team__job">
                    Графический дизайнер
                    </span>
                  </div>
                </div>
                <div className='teamBtn'>
                  <button type="submit" className="teamBtn__second">
                    Написать сообщение
                </button>
                </div>
              </div>
              <div className="team__userRow">
                <Link href="#" className="team__userProfilePicture">
                  <img src="images/pp8.svg" alt="" />
                </Link>
                <div className="team__userInfoCol">
                  <div className="team__userNameRow">
                    <span className="team__name">Арбита Шаувхалова</span>
                  </div>
                  <div className="team__jobRow">
                    <span className="team__job team__job">Frontend-разработчик</span>
                  </div>
                </div>
                <div className='teamBtn'>
                  <button type="submit" className="teamBtn__invite">
                    Приглашение отправлено
                </button>
                </div>
              </div>
              <div className="team__userRow">
                <Link href="#" className="team__userProfilePicture">
                  <img src="images/pp2.svg" alt="" />
                </Link>
                <div className="team__userInfoCol">
                  <div className="team__userNameRow">
                    <span className="team__name">
                      Сумаййа Башаева 
                    </span>
                  </div>
                  <div className="team__jobRow">
                    <span className="team__job">
                    Контент-мейкер
                    </span>
                  </div>
                </div>
                <div className='teamBtn'>
                  <button type="submit" className="teamBtn__second">
                    Написать сообщение
                </button>
                </div>
              </div>
          </div>
          
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
