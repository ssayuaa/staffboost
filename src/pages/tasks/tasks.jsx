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
        <Sidebar indexActiveEl={0} />
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
            {tasks.map(({ name, id, employee, data }) => (
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
            <div className="addCar__wrap">
              <div className="blur" onClick={() => setIsOpenForm(false)}></div>
              <section className="addCar">
                <h1 className="addCar__title">Add your auto</h1>
                <form action="">
                  <div className="formInner">
                    <div className="inputbox">
                      <label htmlFor="brand">Задача</label>
                      <input
                        type="text"
                        placeholder="Khalid Umalatov"
                        name="brand"
                        id="brand"
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
                      <label htmlFor="model">Описание задачи</label>
                      <input
                        type="text"
                        placeholder="emailexample@gmail.com"
                        name="model"
                        id="model"
                        value={newTask.description}
                        onChange={(e) =>
                          setNewTask((prev) => {
                            return { ...prev, description: e.target.value };
                          })
                        }
                        required
                      />
                    </div>

                    <div className="inputbox">
                      <label htmlFor="year">Сотрудник</label>
                      <input
                        type="text"
                        placeholder="Enter your password"
                        name="year"
                        id="year"
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
                      <label htmlFor="yearsOfOwnership">Дедлайн</label>
                      <input
                        type="text"
                        placeholder="emailexample@gmail.com"
                        name="yearsOfOwnership"
                        id="yearsOfOwnership"
                        value={newTask.data}
                        onChange={(e) =>
                          setNewTask((prev) => {
                            return { ...prev, data: e.target.value };
                          })
                        }
                        required
                      />
                    </div>
                    <button type="submit" className="primaryBtn" onClick={addTask}>
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
