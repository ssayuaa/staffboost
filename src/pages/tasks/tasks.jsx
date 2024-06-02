import { useEffect, useRef, useState } from 'react';

import Sidebar from '../../components/sidebar/sidebar';

import './tasks.sass';

const Tasks = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [tasks, setTasks] = useState(
    localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [],
  );
  const [title, setTitle] = useState('Добавление задачи');
  const [changeTaskId, setChangeTaskId] = useState(null);
  const [newTask, setNewTask] = useState({
    name: '',
    employee: '',
    data: '',
    description: '',
    souplelim: '',
    durlim: '',
    bonus: '',
  });
  const addTask = (e) => {
    e.preventDefault();
    if (typeof changeTaskId === 'string') {
      console.log(1);
      console.log(newTask);
      setTasks(tasks.map((item) => (item.id === changeTaskId ? newTask : item)));
    } else {
      setTasks([...tasks, { ...newTask, id: newTask.name + tasks.length }]);
    }
    setNewTask({
      name: '',
      employee: '',
      data: '',
      description: '',
      souplelim: '',
      durlim: '',
      bonus: '',
    });
    setIsOpenForm(false);
    setChangeTaskId(null);
  };
  console.log(title);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div>
      <main className="content">
        <Sidebar indexActiveEl={1} />
        <section className="myTasks">
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
            <div
              className="iconsContainer"
              onClick={() => {
                setIsOpenForm(true);
                setTitle('Добавление задачи');
              }}>
              <img src="images/filter2.svg" alt="Filter icon" />
            </div>
          </div>
          <div className="tasksCatalog">
            {tasks.map(({ name, id, employee, souplelim, durlim, bonus }, i) => (
              <div
                className="taskCard"
                key={id}
                onClick={(e) => {
                  setIsOpenForm(true);
                  setTitle('');
                  setNewTask(tasks.filter((item) => item.id === id)[0]);
                  setChangeTaskId(id);
                }}>
                <div>
                  <div className="taskCard__title">{name}</div>
                  <div className="taskCard__subtitle">{employee}</div>
                </div>

                <div className="taskCard__info">
                  <div className="taskCard__infoLeftCol">
                    <div className="taskCard__number">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14.7099 14.18L11.6099 12.33C11.0699 12.01 10.6299 11.24 10.6299 10.61V6.51001M21 11C21 16.52 16.52 21 11 21C5.48 21 1 16.52 1 11C1 5.48 5.48 1 11 1C16.52 1 21 5.48 21 11Z"
                          stroke={i === 1 ? '#ff6370' : 'white'}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span style={i === 1 ? { color: '#ff6370' } : {}}>Дедлайн</span>
                    </div>
                  </div>
                  <div className="taskCard__data">{souplelim}</div>
                </div>
                <div className="tasksBtn">
                  <button
                    type="submit"
                    className="tasksBtn__first"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpenForm(true);
                      setTitle('Редактирование');
                      setNewTask(tasks.filter((item) => item.id === id)[0]);
                      setChangeTaskId(id);
                    }}>
                    Изменить
                  </button>
                  <button
                    type="submit"
                    className="tasksBtn__second"
                    onClick={() => setTasks(tasks.filter((item) => item.id !== id))}>
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>

          {isOpenForm && (
            <div className="addTask__wrap">
              <div className="blur" onClick={() => setIsOpenForm(false)}></div>
              <section className="addTask">
                {title && <h1 className="addTask__title">{title}</h1>}
                <form action="">
                  <div className="formInner">
                    <div className="inputbox">
                      <label htmlFor="names">Задача</label>
                      <input
                        type="text"
                        placeholder="Название задачи"
                        name="names"
                        id="names"
                        value={newTask.name}
                        onChange={(e) =>
                          setNewTask((prev) => {
                            return { ...prev, name: e.target.value };
                          })
                        }
                        required
                      />
                    </div>

                    <div className="inputbox">
                      <label htmlFor="text">Сотрудник</label>
                      <input
                        type="text"
                        placeholder="Введите ФИО сотрудника"
                        name="text"
                        id="text"
                        value={newTask.employee}
                        onChange={(e) =>
                          setNewTask((prev) => {
                            return { ...prev, employee: e.target.value };
                          })
                        }
                        required
                      />
                    </div>
                    <div className="inputbox">
                      <label htmlFor="dates">Мягкий Дедлайн</label>
                      <input
                        type="date"
                        placeholder="Дата"
                        name="dates"
                        id="dates"
                        value={newTask.souplelim}
                        onChange={(e) =>
                          setNewTask((prev) => {
                            return { ...prev, souplelim: e.target.value };
                          })
                        }
                        required
                      />
                    </div>
                    <div className="inputbox">
                      <label htmlFor="dates"> Жесткий Дедлайн</label>
                      <input
                        type="date"
                        placeholder="Дата"
                        name="dates"
                        id="dates"
                        value={newTask.durlim}
                        onChange={(e) =>
                          setNewTask((prev) => {
                            return { ...prev, durlim: e.target.value };
                          })
                        }
                        required
                      />
                    </div>
                    <div className="inputbox">
                      <label htmlFor="bonus">Бонусы</label>
                      <input
                        type="text"
                        placeholder="Бонусы"
                        name="bonuses"
                        id="bonuses"
                        value={newTask.bonus}
                        onChange={(e) =>
                          setNewTask((prev) => {
                            return { ...prev, bonus: e.target.value };
                          })
                        }
                        required
                      />
                    </div>
                    {title !== '' && (
                      <button type="submit" className="primaryBtn" onClick={addTask}>
                        {title === 'Редактирование' ? 'Сохранить' : 'Добавить'}
                      </button>
                    )}
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
