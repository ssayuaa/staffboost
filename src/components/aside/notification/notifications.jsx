import Check from '../../../assets/svg/check';
import './notification.sass';

const Notification = ({ type, text, date }) => {
  return (
    <div className="aside-notification">
      <div className="notification__top">
        <Check color={type === 'new_employee' ? 'violet' : type === 'done' ? 'green' : ''} />
        <div className="notification__text">{text}</div>
      </div>
      <div className="notification__date">{date}</div>
    </div>
  );
};

export default Notification;
