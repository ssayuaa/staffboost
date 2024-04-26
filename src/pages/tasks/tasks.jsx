import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

import Nav from '../../components/nav/nav';
import Sidebar from '../../components/sidebar/sidebar';

import './tasks.sass';

const Tasks = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
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
          {isOpenForm && (
            <div className="addCar__wrap">
              <div className="blur" onClick={() => setIsOpenForm(false)}></div>{' '}
              <section className="addCar">
                <h1 className="addCar__title">Add your auto</h1>
                <form action="">
                  <div className="formInner">
                    <div className="inputbox">
                      <label htmlFor="brand">Brand</label>
                      <input
                        type="text"
                        placeholder="Khalid Umalatov"
                        name="brand"
                        id="brand"
                        required
                      />
                    </div>

                    <div className="inputbox">
                      <label htmlFor="model">Model</label>
                      <input
                        type="text"
                        placeholder="emailexample@gmail.com"
                        name="model"
                        id="model"
                        required
                      />
                    </div>

                    <div className="inputbox">
                      <label htmlFor="year">Year</label>
                      <input
                        type="text"
                        placeholder="Enter your password"
                        name="year"
                        id="year"
                        required
                      />
                    </div>

                    <div className="inputbox">
                      <label htmlFor="yearsOfOwnership">Years of ownership</label>
                      <input
                        type="text"
                        placeholder="emailexample@gmail.com"
                        name="yearsOfOwnership"
                        id="yearsOfOwnership"
                        required
                      />
                    </div>
                    <button type="submit" className="primaryBtn">
                      Add
                    </button>
                  </div>
                </form>
              </section>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};
export default Tasks;
