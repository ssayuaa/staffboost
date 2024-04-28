import { Link } from 'react-router-dom';
import { useState } from 'react';

import Nav from '../../components/nav/nav';
import Sidebar from '../../components/sidebar/sidebar';

import './team.sass';

const Team = () => {
  const [team, setTeam] = useState([
    {
      id: 0,
      name: 'Deniel Hawkins',
      job: 'Руководитель проекта',
      image: 'images/pp7.svg',
      status: false,
      email: 'asfdsfsdf-sdfdsfdsf@gmail.com',
    },
    {
      id: 1,
      name: 'Джейн Купер',
      job: 'Backend-разработчик',
      image: 'images/pp3.svg',
      status: true,
      email: 'asfdsfsdf',
    },
    {
      id: 2,
      name: 'Джейн Купер',
      job: 'Backend-разработчик',
      image: 'images/pp3.svg',
      status: true,
      email: 'asfdsfsdf',
    },
  ]);
  return (
    <div>
      <Nav />
      <div className="content">
        <Sidebar indexActiveEl={0} />
        <section className="team">
          <div className="team__teams">
            <div className="team-col">
              <div className="team__Col">Сотрудники</div>
              {team.map(({ name, job, image, id, status, email }) => (
                <div className="team__userRow" key={id}>
                  <Link href="#" className="team__userProfilePicture">
                    <img src={image} alt="" />
                  </Link>
                  <div className="team__userInfoCol">
                    <div className="team__userNameRow">
                      <span className="team__name">{name}</span>
                    </div>
                    <div className="team__jobRow">
                      <span className="team__job">{job},</span>
                      <span className="team__job">{email}</span>
                    </div>
                  </div>
                  <div className="teamBtn">
                    {status ? (
                      <button type="submit" className="teamBtn__second">
                        Написать сообщение
                      </button>
                    ) : (
                      <button type="submit" className="teamBtn__invite">
                        Приглашение отправлено
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {/* <div className="team__userRow">
                <Link href="#" className="team__userProfilePicture">
                  <img src="images/pp3.svg" alt="" />
                </Link>
                <div className="team__userInfoCol">
                  <div className="team__userNameRow">
                    <span className="team__name">Джейн Купер</span>
                  </div>
                  <div className="team__jobRow">
                    <span className="team__job">Backend-разработчик </span>
                  </div>
                </div>
                <div className="teamBtn">
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
                    <span className="team__job">Главный специалист</span>
                  </div>
                </div>
                <div className="teamBtn">
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
                <div className="teamBtn">
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
                    <span className="team__name">Aiza Zyazikova</span>
                  </div>
                  <div className="team__jobRow">
                    <span className="team__job">Рилсмейкер</span>
                  </div>
                </div>
                <div className="teamBtn">
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
                    <span className="team__name">Севиль Уильямсон</span>
                  </div>
                  <div className="team__jobRow">
                    <span className="team__job">Графический дизайнер</span>
                  </div>
                </div>
                <div className="teamBtn">
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
                <div className="teamBtn">
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
                    <span className="team__name">Сумаййа Башаева</span>
                  </div>
                  <div className="team__jobRow">
                    <span className="team__job">Контент-мейкер</span>
                  </div>
                </div>
                <div className="teamBtn">
                  <button type="submit" className="teamBtn__second">
                    Написать сообщение
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
