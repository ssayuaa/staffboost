import { Link } from 'react-router-dom';
import { useState } from 'react';

import Nav from '../../components/nav/nav';
import Sidebar from '../../components/sidebar/sidebar';

import './team.sass';

const Team = () => {
  const [team, setTeam] = useState([
    {
      id: 0,
      name: 'Арбита Шаувхалова',
      job: 'Frontend-разработчик',
      image: 'images/pp8.svg',
      status: false,
      email: 'shauvkhalova03@bk.ru',
    },
    {
      id: 1,
      name: 'Джейн Купер',
      job: 'Backend-разработчик',
      image: 'images/pp3.svg',
      status: true,
      email: 'kuperrrrr@mail.ru',
    },
    {
      id: 2,
      name: 'Петимат Гишларкаева',
      job: 'Главный специалист',
      image: 'images/pp5.svg',
      status: true,
      email: 'gishlarkaeva.p@mail.ru',
    },
    {
      id: 3,
      name: 'Deniel Hawkins',
      job: 'Руководитель проекта',
      image: 'images/pp7.svg',
      status: true,
      email: 'hawkins005@mail.ru',
    },
    {
      id: 4,
      name: 'Крунгян Марина',
      job: 'Дизайнер',
      image: 'images/pp1.svg',
      status: true,
      email: 'marina.krungyan@mail.ru',
    },
    {
      id: 5,
      name: 'Aiza Zyazikova',
      job: 'Рилсмейкер',
      image: 'images/pp6.svg',
      status: true,
      email: 'zyazikova.a@mail.ru',
    },
    {
      id: 6,
      name: 'Сумаййа Башаева',
      job: 'Контент-мейкер',
      image: 'images/pp2.svg',
      status: true,
      email: 'miamin13@mail.ru',
    },
    {
      id: 6,
      name: 'Севиль Уильямсон',
      job: 'Графический дизайнер',
      image: 'images/pp4.svg',
      status: true,
      email: 'sevu13shka@mail.ru',
    },
  ]);
  return (
    <div>
      <Nav />
      <div className="content">
        <Sidebar indexActiveEl={2} />
        <section className="team">
          <div className="team__teams">
            <div className="team__Col">
              <span>Сотрудники</span>
              <button type="submit" className="teamBtn__second">
                Добавить
              </button>
            </div>
            <div className="team-col">
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
