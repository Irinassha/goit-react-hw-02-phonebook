import { ContactForm } from 'components/contactform/ContactForm';
import { ContactList } from 'components/contactlist/ContactList';
import { Filter } from 'components/filter/Filter';
import React from 'react';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  
  handlerDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  handlerFilterName = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredData = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handlerAddNameNumber = option => {
    const newObject = {
      id: nanoid(),
      name: option.name,
      number: option.number,
    };

    const isExist = this.state.contacts.find(
      item => item.name.toLowerCase() === option.name.toLowerCase()
    );

    if (isExist) {
      return alert(`${option.name} is already in contacts`);
    }

    if (option.name === '' || option.number === '') {
      return alert('Please fill in all fields');
    }

    return this.setState(prevState => ({
      contacts: [...this.state.contacts, newObject],
    }));
  };

  render() {
    const filterContacts = this.getFilteredData();
    const { filter, contacts } = this.state;
    const deleteContact = this.handlerDeleteContact;
    const filterName = this.handlerFilterName;
    const addNameNumber = this.handlerAddNameNumber;
    return (
      <div
        style={{
          width: '500px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '0 auto',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} addNameNumber={addNameNumber} />
        <h2>Find contact by name</h2>
        <Filter
          filter={filter}
          filterName={filterName}
          contactsFind={filterContacts}
        />
        <ContactList
          contacts={filterContacts}
          onLeaveFeedback={deleteContact}
        />
      </div>
    );
  }
}
