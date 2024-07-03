import { Link } from 'react-router-dom';

import Sidebar from '../../components/sidebar/sidebar';

import './project.sass';

const Project = () => {
  return (
    <div>
      <div className="content">
        <Sidebar indexActiveEl={0} />
        <section className="main">
          <div>
            <div className="project">
              <div className="project__firstCol">
                <h2 className="project__name">
                  Статус проекта: <span className="project__span2">50%</span>
                </h2>
                <div className="project__info project__info_margin">
                  <div className="project__leftCol">
                    <span className="project__title">Выполнено</span>
                    <span className="project__numbers">12</span>
                  </div>
                  <div className="project__vl"></div>
                  <div className="project__rightCol">
                    <span className="project__title">Осталось</span>
                    <span className="project__numbers">12</span>
                  </div>
                </div>

                <div className="project__info">
                  <div className="project__leftCol">
                    <span className="project__title">Сгорают</span>
                    <span className="project__numbers">1</span>
                  </div>
                  <div className="project__vl"></div>
                  <div className="project__rightCol">
                    <span className="project__title">Просрочено</span>
                    <span className="project__numbers">3</span>
                  </div>
                </div>
              </div>
              <ul className="project__characteristics">
                <li>
                  Название проекта:{' '}
                  <span>
                    Пилотный проект по внедрению алгоритмов ЭЦП в отделе для повышения безопасности
                    информации
                  </span>
                </li>
                <li>
                  Дата создания: <span>04.04.2024</span>
                </li>
                <li>
                  Дата сдачи: <span>04.06.2024</span>
                </li>
              </ul>
            </div>
            <div className="project project__margin ">
              <div className="project__firstCol">
                <ul className="project__characteristics project__characteristics_left">
                  <li>
                    Размер материального поощрения в процентах:
                    <span> 60%</span>
                  </li>
                </ul>
                <div to="/tasks" className="availableSensors__link">
                  Изменить
                </div>
              </div>
            </div>
          </div>

          <div className="project-content-left">
            <div className="activity"></div>
            <div className="availableSensors">
              <div className="availableSensors__title">
                <div className="availableSensors__txt">Список задач на сегодня</div>
              </div>
              <div className="availableSensors__hl"></div>
              <div className="checkboxes">
                <div className="checkbox">
                  <input type="checkbox" name="checkbox1" id="checkbox1" />
                  <label htmlFor="checkbox1">
                    <span>Мониторинг и обновление криптографических библиотек</span>
                  </label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" name="checkbox2" id="checkbox2" />
                  <label htmlFor="checkbox2">
                    <span>Аудит безопасности системы подписания</span>
                  </label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" name="checkbox3" id="checkbox3" />
                  <label htmlFor="checkbox3">
                    <span>Обучение работе с алгоритмами ЭЦП</span>
                  </label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" name="checkbox4" id="checkbox4" />
                  <label htmlFor="checkbox4">
                    <span>Интеграция алгоритмов ЭЦП с внешними системами</span>
                  </label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" name="checkbox5" id="checkbox5" />
                  <label htmlFor="checkbox5">
                    <span>Анализ и улучшение производительности алгоритмов подписания</span>
                  </label>
                </div>
              </div>
              <Link to="/tasks" className="availableSensors__link">
                Смотреть все
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
