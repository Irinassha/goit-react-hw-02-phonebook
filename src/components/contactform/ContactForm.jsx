import React from 'react';
import s from './ContactForm.module.css';
export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  hendlerChangeName = e => {
    this.setState({ name: e.target.value });
  };

  hendlerCgangeNumber = e => {
    const numberValue = e.target.value;
    const inputNumber = numberValue.replace(/[^0-9+]/, '');
    if (numberValue !== inputNumber) {
      return alert('Please use numbers only');
    }
    this.setState({ number: numberValue });
  };

  handlerAdd = () => {
    this.props.addNameNumber(this.state);
    this.setState(prevState => ({
      name: '',
      number: '',
    }));
  };

  render() {
    const { name, number } = this.state;
    const nameAdd = this.hendlerChangeName;
    const numberAdd = this.hendlerCgangeNumber;
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
        <button className={s.formBtn} type="button" onClick={this.handlerAdd}>
          Add contact
        </button>
      </form>
    );
  }
}
