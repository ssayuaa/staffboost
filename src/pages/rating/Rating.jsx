import { useState } from 'react';
import Nav from '../../components/nav/nav';
import Sidebar from '../../components/sidebar/sidebar';

import './rating.sass';
const Rating = () => {
  const [tasks, setTasks] = useState(
    localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [],
  );
  const [team, setTeam] = useState(
    localStorage.getItem('team') ? JSON.parse(localStorage.getItem('team')) : [],
  );

  // bonus
  // id
  // name
  //job

  return (
    <div>
      <Nav />
      <div className="content">
        <Sidebar indexActiveEl={7} />
        <section className="ratings">
          <div className="rating">
            <div className="rating__firstRow">
              <p className="rating__title">Рейтинг</p>
              {/* <button className="rating__btn">+ Добавить</button> */}
            </div>
            <div className="rating__secondRow">
              <span className="rating__heading__num">№</span>
              <span className="rating__heading">Сотрудник</span>
              <span className="rating__heading">Почта</span>
              <span className="rating__heading">Начисленные баллы</span>
              <span className="rating__heading">Сгоревшие баллы</span>
              <span className="rating__heading">Общее количество</span>
            </div>
            {tasks.map(({ id, employee, bonus }, i) => (
              <div className="rating__infoRow">
                <span className="rating__info__num">{i + 1}</span>
                <span className="rating__info">{employee}</span>
                <span className="rating__info">
                  {team.filter((item) => item.name.toLowerCase() === employee.toLowerCase())[0].job}
                </span>
                <span className="rating__info">0</span>
                <span className="rating__info">0</span>
                <span className="rating__info">0</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rating;
