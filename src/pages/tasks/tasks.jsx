import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

import Nav from '../../components/nav/nav';
import Sidebar from '../../components/sidebar/sidebar';

import './tasks.sass';

const Tasks = () => {
  const setIsOpenForm = useState(false);
  const plusBtn = useRef(null);
  //taskCard_hidden
  return (
    <div>
      <Nav />
      <main className="content">
        <Sidebar indexActiveEl={0} />
        <section
          className="myTasks"
          onClick={(e) => plusBtn.current !== e.target && setIsOpenForm(false)}>
          <div className="myTasks__title">Задачи</div>
          <div className="selectWrapper">
            <div className="selectContainer">
              <select className="select" name="" id="">
                <option value="today">Сегодня</option>
              </select>
              <select className="select select_sm" name="" id="">
                <option value="all">Все</option>
              </select>
            </div>
            <div className="iconsContainer">
              <img src="images/filter2.svg" alt="Filter icon" />
            </div>
          </div>
          <div className="tasksCatalog">
            <div className="catalog-card">
              <div className="taskCard">
                <div>
                  <div className="taskCard__title">Название задачи</div>
                  <div className="taskCard__subtitle">Имя сотрудника</div>
                </div>
                
                <div className="taskCard__info">
                  <div className="taskCard__infoLeftCol">
                    <div className="taskCard__number">
                      <img src="images/vector.svg" alt="Clock icon" />
                      <span>Назначен</span>
                    </div>
                  </div>
                  <div className="taskCard__data">06.04.2024</div>
                </div>
                <div className='tasksBtn'>
                <button type="submit" className="tasksBtn__first">
                    Изменить
                </button>
                <button type="submit" className="tasksBtn__second">
                    Удалить
                </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Tasks;
