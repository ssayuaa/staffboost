import Notification from './notification/notifications';
import closeSvg from './../../assets/svg/close.svg';
import './aside.sass';

const Aside = ({ isAsideOpen, setIsAsideOpen }) => {
  return (
    <div className={'aside__wrap ' + (isAsideOpen ? '"aside_show' : 'aside_hidden')}>
      <div className="aside__left" onClick={() => setIsAsideOpen(false)}></div>
      <div className="aside">
        <div className="aside__top">
          <div className="aside__title">Уведомления (3)</div>
          <div className="aside__close">
            <img src={closeSvg} alt="" onClick={() => setIsAsideOpen(false)} />
          </div>
        </div>

        <div className="notifications">
          <Notification type="new_employee" date="04.04.24" text="Арбита принял(а) приглашение" />
          <Notification type="done" date="01.04.02" text="Сумая выполнил(а) задачу" />
        </div>
      </div>
    </div>
  );
};

export default Aside;
