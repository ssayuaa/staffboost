import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import Sidebar from '../../components/sidebar/sidebar';

import './team.sass';

const Team = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [team, setTeam] = useState(
    localStorage.getItem('team') ? JSON.parse(localStorage.getItem('team')) : [],
  );
  const [changeTeamId, setChangeTeamId] = useState(null);
  const [newTeam, setNewTeam] = useState({
    name: '',
    job: '',
    email: '',
    id: '',
  });
  const addTeam = (e) => {
    e.preventDefault();
    if (typeof changeTeamId === 'string') {
      console.log(1);
      console.log(newTeam);
      setTeam(team.map((item) => (item.id === changeTeamId ? newTeam : item)));
    } else {
      setTeam([...team, { ...newTeam, id: newTeam.name + team.length }]);
    }
    setNewTeam({
      name: '',
      job: '',
      email: '',
      id: '',
    });
    setIsOpenForm(false);
    setChangeTeamId(null);
  };
  useEffect(() => {
    localStorage.setItem('team', JSON.stringify(team));
  }, [team]);

  const auth = useSelector((state) => state.auth.auth);
  return (
    <div>
      <div className="content">
        <Sidebar indexActiveEl={2} />
        <section className="team">
          <div className="team__teams">
            <div className="team__Col">
              <span>Сотрудники</span>
              <button type="submit" className="teamBtn__second" onClick={() => setIsOpenForm(true)}>
                Добавить
              </button>
            </div>
            <div className="team-col">
              {team.map(({ name, job, id, email }) => (
                <div className="team__userRow" key={id}>
                  <Link to="/chats" href="#" className="team__userProfilePicture">
                    {name[0]}
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
                    <button
                      type="submit"
                      className="teamBtn__invite"
                      onClick={() => setTeam(team.filter((item) => item.id !== id))}>
                      Удалить сотрудника
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {isOpenForm && (
            <div className="addTeam__wrap">
              <div className="blur" onClick={() => setIsOpenForm(false)}></div>
              <section className="addTeam">
                <h1 className="addTeam__title">Добавление сотрудника</h1>
                <form action="">
                  <div className="formInner">
                    <div className="inputbox">
                      <label htmlFor="names">Сотрудник</label>
                      <input
                        type="text"
                        placeholder="ФИО сотрудника"
                        name="names"
                        id="names"
                        value={newTeam.name}
                        onChange={(e) =>
                          setNewTeam((prev) => {
                            return { ...prev, name: e.target.value };
                          })
                        }
                        required
                      />
                    </div>

                    <div className="inputbox">
                      <label htmlFor="job">Должность</label>
                      <input
                        type="text"
                        placeholder="Название должности"
                        name="job"
                        id="job"
                        value={newTeam.job}
                        onChange={(e) =>
                          setNewTeam((prev) => {
                            return { ...prev, job: e.target.value };
                          })
                        }
                        required
                      />
                    </div>

                    <div className="inputbox">
                      <label htmlFor="emails">Почта</label>
                      <input
                        type="text"
                        placeholder="Введите почту сотрудника"
                        name="emails"
                        id="emails"
                        value={newTeam.email}
                        onChange={(e) =>
                          setNewTeam((prev) => {
                            return { ...prev, email: e.target.value };
                          })
                        }
                        required
                      />
                    </div>
                    <button type="submit" className="primaryBtn" onClick={addTeam}>
                      Добавить
                    </button>
                  </div>
                </form>
              </section>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Team;
