import React, { Component } from "react";
import AddContactForm from "../AddContactForm/AddContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import styles from "./App.module.css";
class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  
    handleAddContact(newContact) {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  }
  handleFilter(event) {
    const { value } = event.target;

    this.setState({ filter: value });
  }
  handleDelete(id) {
    const filteredContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState(prevState =>({ contacts: filteredContacts }));
  }
  render() {
    const { contacts, filter } = this.state;

    return (
      <div className={styles.mainContainer}>
        <h1 class="heading-caption">Phonebook</h1>
        <AddContactForm
          handleAddContact={this.handleAddContact.bind(this)}
          contacts={contacts}
        />

        <h2>Contacts</h2>
        <Filter
          filterText={filter}
          handleFilter={this.handleFilter.bind(this)}
        />
        <ContactList
          contacts={contacts}
          filterText={filter}
          handleDelete={this.handleDelete.bind(this)}
        />
      </div>
    );
  }
}
export default App;

