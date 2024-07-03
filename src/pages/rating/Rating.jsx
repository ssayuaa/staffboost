import { useState } from 'react';
import Sidebar from '../../components/sidebar/sidebar';

import './rating.sass';
const Rating = () => {
  const [tasks, setTasks] = useState(
    localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [],
  );
  const [team, setTeam] = useState(
    localStorage.getItem('team') ? JSON.parse(localStorage.getItem('team')) : [],
  );
  const [isOpen, setIsOpen] = useState(false);
  // bonus
  // id
  // name
  //job

  return (
    <div>
      <div className="content">
        <Sidebar indexActiveEl={7} />
        <section className="ratings">
          <div className="rating">
            {!isOpen && (
              <table className="rating__table rating__table_none">
                <tr className="rating__secondRow">
                  <td className="rating__heading rating__heading__num">№</td>
                  <td className="rating__heading">Сотрудник</td>
                  <td className="rating__heading">Почта</td>
                  <td className="rating__heading">Начисленные баллы</td>
                  <td className="rating__heading">Сгоревшие баллы</td>
                  <td className="rating__heading">Общее количество</td>
                </tr>

                {tasks.map(({ id, employee, bonus }, i) => (
                  <tr className="rating__infoRow">
                    <td className="rating__info rating__info__num">{i + 1}</td>
                    <td className="rating__info">{employee}</td>
                    <td className="rating__info">
                      {
                        team.filter((item) => item.name.toLowerCase() === employee.toLowerCase())[0]
                          .job
                      }
                    </td>
                    <td className="rating__info">0</td>
                    <td className="rating__info">0</td>
                    <td className="rating__info">
                      {' '}
                      {
                        team.filter((item) => item.name.toLowerCase() === employee.toLowerCase())[0]
                          .points
                      }
                    </td>
                  </tr>
                ))}
              </table>
            )}
            {isOpen && (
              <div className="rating__heading rating__heading_100">
                Квартальный отчет за период (апрель 2024 - июнь 2024)
              </div>
            )}
            {isOpen && (
              <table className="rating__table">
                <tr>
                  <td className="rating__heading rating__heading__num">№</td>
                  <td className="rating__heading">Сотрудник</td>
                  <td className="rating__heading">Должность</td>
                  <td className="rating__heading">Общее количество баллов</td>
                  <td className="rating__heading">Размер премии</td>
                </tr>
                <tr>
                  <td className="rating__info rating__info__num">1</td>
                  <td className="rating__info">Сумая Башаева</td>
                  <td className="rating__info">дизайнер</td>
                  <td className="rating__info">3000</td>
                  <td className="rating__info">32000 р.</td>
                </tr>
                <tr>
                  <td className="rating__info rating__info__num">1</td>
                  <td className="rating__info">Арбита Шаувхалова</td>
                  <td className="rating__info">frontend-разработчик</td>
                  <td className="rating__info">2900</td>
                  <td className="rating__info">30000 р.</td>
                </tr>
              </table>
            )}

            {!isOpen && (
              <button className="rating__btn" onClick={() => setIsOpen(true)}>
                Открыть квартальный отчет
              </button>
            )}
            {isOpen && (
              <button className="rating__btn" onClick={() => setIsOpen(false)}>
                Закрыть квартальный отчет
              </button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rating;
