import s from './ContactList.module.css';
export const ContactList = ({ contacts, onLeaveFeedback }) => {
  return (
    <ul>
      {contacts.map(item => {
        return (
          <li key={item.id} className={s.list}>
            <div className={s.itemBtn}>
              <p className={s.text}>
                {item.name}
                <span>{item.number}</span>
              </p>
              <button onClick={()=>onLeaveFeedback(item.id)}>Delete</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
