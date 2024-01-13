import s from './ContactForm.module.css';

export const ContactForm = ({ nameAdd, numberAdd, addNameNumber, name, number }) => {
  return (
    <form className={s.form}>
      <div className={s.formInput}>
        <label className={s.formLabel}>Name </label>
        <input
          className={s.input}
          type="text"
          name="name"
          required
          placeholder="Enter your name"
          pattern="[1-9]"
          value={name}
          onChange={nameAdd}
        />
      </div>
      <div className={s.formInput}>
        <label className={s.formLabel}>Number </label>
        <input
          className={s.input}
          type="tel"
          name="number"
          required
          placeholder="Enter your phone number"
          value={number}
          onChange={numberAdd}
        />
      </div>
      <button className={s.formBtn} type="button" onClick={addNameNumber}>
        Add contact
      </button>
    </form>
  );
};
