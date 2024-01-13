import { ContactForm } from 'components/contactform/ContactForm';
import { ContactList } from 'components/contactlist/ContactList';
import { Filter } from 'components/filter/Filter';
import { nanoid } from 'nanoid';
import React from 'react';

export class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handlerDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  hendlerChangeName = e => {
    return this.setState({ name: e.target.value });
  };

  hendlerCgangeNumber = e => {
    const numberValue = e.target.value;
    const inputNumber = numberValue.replace(/[^0-9+]/, '');
    if (numberValue !== inputNumber) {
      return alert('Please use numbers only');
    }
    return this.setState({ number: numberValue });
  };

  handlerAddNameNumber = () => {
    const newObject = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    if (this.state.name === '' || this.state.number === '') {
      return alert('Please fill in all fields');
    }
    return this.setState(prevState => ({
      contacts: [...this.state.contacts, newObject],
      name: '',
      number: '',
    }));
  };
  handlerFilterName = (e) => {
  this.setState({filter: e.target.value})
  }

  getFilteredData = () => {
  return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
  }

  render() {
    const filterContacts = this.getFilteredData();
    const {filter } = this.state;
    const deleteContact = this.handlerDeleteContact;
    const nameAdd = this.hendlerChangeName;
    const numberAdd = this.hendlerCgangeNumber;
    const addNameNumber = this.handlerAddNameNumber;
    const filterName = this.handlerFilterName;
    return (
      <div>
        <ContactForm
          nameAdd={nameAdd}
          numberAdd={numberAdd}
          addNameNumber={addNameNumber}
          name={this.state.name}
          number={this.state.number}
        />
        <Filter filter={filter} filterName={filterName} contactsFind={filterContacts} />
        <ContactList contacts={filterContacts} onLeaveFeedback={deleteContact} />
      </div>
    );
  }
}
