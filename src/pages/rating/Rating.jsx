import Nav from '../../components/nav/nav';
import Sidebar from '../../components/sidebar/sidebar';

import './rating.sass';
const Rating = () => {
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
              <div className="rating__infoRow">
                <span className="rating__info__num">1</span>
                <span className="rating__info">Башаева С.С</span>
                <span className="rating__info">miamin13@mail.ru</span>
                <span className="rating__info">20</span>
                <span className="rating__info">5</span>
                <span className="rating__info">15</span>
              </div>
              <div className="rating__infoRow">
              <span className="rating__info__num">2</span>
                <span className="rating__info">Шаувхалова А.И.</span>
                <span className="rating__info">shauvkhalova03@mail.ru</span>
                <span className="rating__info">30</span>
                <span className="rating__info">4</span>
                <span className="rating__info">26</span>
              </div>
              <div className="rating__infoRow">
              <span className="rating__info__num">3</span>
                <span className="rating__info">Крунгян М.В. </span>
                <span className="rating__info">krungyan@mail.ru</span>
                <span className="rating__info">27</span>
                <span className="rating__info">2</span>
                <span className="rating__info">25</span>
              </div>
              <div className="rating__infoRow">
              <span className="rating__info__num">4</span>
                <span className="rating__info">Зязикова А.М-Б.</span>
                <span className="rating__info">zyazikova77@mail.ru</span>
                <span className="rating__info">10</span>
                <span className="rating__info">4</span>
                <span className="rating__info">6</span>
              </div>
              <div className="rating__infoRow">
              <span className="rating__info__num">5</span>
                <span className="rating__info">Купер Д.О.</span>
                <span className="rating__info">kuperrrrr@mail.ru</span>
                <span className="rating__info">20</span>
                <span className="rating__info">3</span>
                <span className="rating__info">17</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default Rating;