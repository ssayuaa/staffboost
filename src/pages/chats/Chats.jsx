import { Link } from 'react-router-dom';
import Nav from './../../components/nav/nav';
import Sidebar from './../../components/sidebar/sidebar';

import './chats.sass';

const Chats = () => {
  return (
    <>
      <Nav />
      <main className="content">
        <Sidebar indexActiveEl={5} />
        <section className="chat">
          <div className="chat-left">
            <div className="chat__leftCol">Чаты</div>
            <div className="chat__chats">
              <div className="chat__userRow">
                <Link href="#" className="chat__userProfilePicture">
                  <img src="images/pp8.svg" alt="" />
                </Link>
                <div className="chat__userInfoCol">
                  <div className="chat__userNameRow">
                    <span className="chat__name">Арбита Шаувхалова</span>
                    <span className="chat__time">01:34 pm</span>
                  </div>
                  <div className="chat__statusRow">
                    <span className="chat__status chat__status_purple-cl">Typing...</span>
                    <span className="chat__notification">3</span>
                  </div>
                </div>
              </div>
              <div className="chat__userRow">
                <Link href="#" className="chat__userProfilePicture">
                  <img src="images/pp1.svg" alt="" />
                </Link>
                <div className="chat__userInfoCol">
                  <div className="chat__userNameRow">
                    <span className="chat__name">Крунгян Марина</span>
                    <span className="chat__time">06:41 pm</span>
                  </div>
                  <div className="chat__statusRow">
                    <span className="chat__status">
                    У меня возникли трудности с поиском информации.
                    </span>
                    <span className="chat__notification">1</span>
                  </div>
                </div>
              </div>
              <div className="chat__userRow">
                <Link href="#" className="chat__userProfilePicture">
                  <img src="images/pp2.svg" alt="" />
                </Link>
                <div className="chat__userInfoCol">
                  <div className="chat__userNameRow">
                    <span className="chat__name">
                      Сумаййа Башаева 
                    </span>
                    <span className="chat__time">07:59 pm</span>
                  </div>
                  <div className="chat__statusRow">
                    <span className="chat__status">
                    Отправила последнюю ведомость о совершенных действиях.
                    </span>
                  </div>
                </div>
              </div>
              <div className="chat__userRow">
                <Link href="#" className="chat__userProfilePicture">
                  <img src="images/pp3.svg" alt="" />
                </Link>
                <div className="chat__userInfoCol">
                  <div className="chat__userNameRow">
                    <span className="chat__name">Джейн Купер</span>
                    <span className="chat__time">17 Окт</span>
                  </div>
                  <div className="chat__statusRow">
                    <span className="chat__status">
                    Можете проверить вторую главу в документе? Отправила на почту {' '}
                    </span>
                  </div>
                </div>
              </div>
              <div className="chat__userRow">
                <Link href="#" className="chat__userProfilePicture">
                  <img src="images/pp6.svg" alt="" />
                </Link>
                <div className="chat__userInfoCol">
                  <div className="chat__userNameRow">
                    <span className="chat__name">
                      Aiza Zyazikova <img src="images/green-dot.svg" alt="Online icon" />
                    </span>
                    <span className="chat__time">Вчера</span>
                  </div>
                  <div className="chat__statusRow">
                    <span className="chat__status">
                    Отлично! Скоро проверю.
                    </span>
                  </div>
                </div>
              </div>
              <div className="chat__userRow">
                <Link href="#" className="chat__userProfilePicture">
                  <img src="images/pp4.svg" alt="" />
                </Link>
                <div className="chat__userInfoCol">
                  <div className="chat__userNameRow">
                    <span className="chat__name">
                      Севиль Уильямсон
                      <img src="images/green-dot.svg" alt="Online icon" />
                    </span>
                    <span className="chat__time">17 Окт</span>
                  </div>
                  <div className="chat__statusRow">
                    <span className="chat__status">
                    Да, конечно. Исходные материалы у вас на почте!
                    </span>
                  </div>
                </div>
              </div>
              <div className="chat__userRow">
                <Link href="#" className="chat__userProfilePicture">
                  <img src="images/pp7.svg" alt="" />
                </Link>
                <div className="chat__userInfoCol">
                  <div className="chat__userNameRow">
                    <span className="chat__name">
                    Deniel Hawkins
                      <img src="images/green-dot.svg" alt="Online icon" />
                    </span>
                    <span className="chat__time">12 Окт</span>
                  </div>
                  <div className="chat__statusRow">
                    <span className="chat__status">
                      Готово!{' '}
                    </span>
                  </div>
                </div>
              </div>
              <div className="chat__userRow">
                <Link href="#" className="chat__userProfilePicture">
                  <img src="images/pp5.svg" alt="" />
                </Link>
                <div className="chat__userInfoCol">
                  <div className="chat__userNameRow">
                    <span className="chat__name">Петимат Гишларкаева</span>
                    <span className="chat__time">09 Окт</span>
                  </div>
                  <div className="chat__statusRow">
                    <span className="chat__status">
                    Проект находится на фазе завершения.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chat-right">
            <div className="chat__rightCol">
              <div className="chat__user">
                <Link href="#" className="chat__profilePicture">
                  <img src="images/pp2.svg" alt="" />
                </Link>
                <div className="chat__userInfo">
                  <div className="chat__userName">
                    <span>Сумаййа Башаева</span>
                    <img src="images/green-dot.svg" alt="" />
                  </div>
                  <div className="chat__status">Онлайн</div>
                </div>
              </div>
              <div className="chat__KebabMenu">
                <img src="images/kebab-menu-icon.svg" alt="Kebab menu icon" />
              </div>
            </div>

            <div className="chat__chatRoom">
              <div className="chat-data">
                <div className="chat__date">Апрель 22</div>
                <div className="chat__messageWrapper">
                  <div className="chat__messageContainer">
                    <Link href="#" className="chat__userProfilePicture">
                      <img src="images/pp2.svg" alt="User profile pictire" />
                    </Link>
                    <div className="chat__messageInner">
                      <p className="chat__messageText">
                      Задержалась с дедлайном на 5 часов по причине болезни. 
                      Отправила черновой вариант, прошу проверить на наличие ошибок.
                      </p>
                      <span className="chat__messageDeliveryTime">01:34 pm</span>
                    </div>
                  </div>
                  <div className="chat__messageContainer chat__messageContainer_sent">
                    <div className="chat__messageInner chat__messageInner_sent">
                      <p className="chat__messageText">
                      Ок. Просмотрю в течение получаса!
                      </p>
                      <span className="chat__messageDeliveryTime">02:18 pm</span>
                    </div>
                  </div>
                  <div className="chat__messageContainer">
                    <Link href="#" className="chat__userProfilePicture">
                      <img src="images/pp2.svg" alt="User profile pictire" />
                    </Link>
                    <div className="chat__messageInner">
                      <p className="chat__messageText">
                      Отправила конечный вариант ведомости о совершенных действиях. 
                      Прошу сообщить о недочетах, если они есть.
                      </p>
                      <span className="chat__messageDeliveryTime">02:21 pm</span>
                    </div>
                  </div>
                  <div className="chat__messageContainer chat__messageContainer_sent">
                    <div className="chat__messageInner chat__messageInner_sent">
                      <p className="chat__messageText">Отлично. Проверю и дам ответ!</p>
                      <span className="chat__messageDeliveryTime">02:23 pm</span>
                    </div>
                  </div>
                  <div className="chat__messageContainer chat__messageContainer_sent">
                    <div className="chat__messageInner chat__messageInner_sent">
                      <p className="chat__messageText">Выслала текущую задачу по проекту!</p>
                      <span className="chat__messageDeliveryTime">04:23 pm</span>
                    </div>
                  </div>
                  <div className="chat__messageContainer chat__messageContainer_sent">
                    <div className="chat__messageInner chat__messageInner_sent">
                      <p className="chat__messageText">Выслала текущую задачу по проекту!</p>
                      <span className="chat__messageDeliveryTime">04:23 pm</span>
                    </div>
                  </div>
                  <div className="chat__messageContainer chat__messageContainer_sent">
                    <div className="chat__messageInner chat__messageInner_sent">
                      <p className="chat__messageText">Выслала текущую задачу по проекту!</p>
                      <span className="chat__messageDeliveryTime">04:23 pm</span>
                    </div>
                  </div>
                  <div className="chat__messageContainer chat__messageContainer_sent">
                    <div className="chat__messageInner chat__messageInner_sent">
                      <p className="chat__messageText">Выслала текущую задачу по проекту!</p>
                      <span className="chat__messageDeliveryTime">04:23 pm</span>
                    </div>
                  </div>
                  <div className="chat__messageContainer chat__messageContainer_sent">
                    <div className="chat__messageInner chat__messageInner_sent">
                      <p className="chat__messageText">Выслала текущую задачу по проекту!</p>
                      <span className="chat__messageDeliveryTime">04:23 pm</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-input">
                <form action="" className="form">
                  <div className="textbox">
                    <img
                      className="textbox__paperClipIcon"
                      src="images/paper-clip-icon.svg"
                      alt="Paper clip icon"
                    />
                    <input type="text" name="" id="" placeholder="Ваше сообщение..." />
                  </div>
                  <input className="submitBtn" type="submit" value="Отправить" />
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Chats;
