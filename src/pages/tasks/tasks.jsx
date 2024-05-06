import { useEffect, useRef, useState } from 'react';

import Nav from '../../components/nav/nav';
import Sidebar from '../../components/sidebar/sidebar';

import './tasks.sass';

const Tasks = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [tasks, setTasks] = useState(
    localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [],
  );
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
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div>
      <Nav />
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
            <div className="iconsContainer" onClick={() => setIsOpenForm(true)}>
              <img src="images/filter2.svg" alt="Filter icon" />
            </div>
          </div>
          <div className="tasksCatalog">
            {tasks.map(({ name, id, employee, data, souplelim, durlim, bonus }) => (
              <div className="taskCard" key={id}>
                <div>
                  <div className="taskCard__title">{name}</div>
                  <div className="taskCard__subtitle">{employee}</div>
                </div>

                <div className="taskCard__info">
                  <div className="taskCard__infoLeftCol">
                    <div className="taskCard__number">
                      <img src="images/vector.svg" alt="Clock icon" />
                      <span>Дедлайн</span>
                    </div>
                  </div>
                  <div className="taskCard__data">{data}</div>
                </div>
                <div className="tasksBtn">
                  <button
                    type="submit"
                    className="tasksBtn__first"
                    onClick={(e) => {
                      setIsOpenForm(true);
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
                <h1 className="addTask__title">Добавление задачи</h1>
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
                      <label htmlFor="emails">Сотрудник</label>
                      <input
                        type="text"
                        placeholder="Введите почту сотрудника"
                        name="emails"
                        id="emails"
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
                        type="text"
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
                        type="text"
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
                    <button type="submit" className="primaryBtn" onClick={addTask}>
                      Добавить
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
