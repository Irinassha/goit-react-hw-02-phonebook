import s from './ContactForm.module.css';

export const ContactForm = () => {
  return (
    <div className={s.form}>
      <div className={s.formInput}>
        <label className={s.formLabel}>Name </label>
        <input
          className={s.input}
          type="text"
          name="name"
          required
          placeholder="Enter your name"
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
        />
      </div>
      <button className={s.formBtn} type="button">Add contact</button>
    </div>
  );
};
