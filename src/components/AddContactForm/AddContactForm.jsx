import React, { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import styles from "./AddContactForm.module.css";

class AddContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleContactData(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    for (const { name } of this.props.contacts) {
      if (name === this.state.name) {
        alert(`${name} is already in contacts`);
        return;
      }
    }

    const newContact = {
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.handleAddContact(newContact);

    this.setState({ name: "", number: "" });
  }

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit.bind(this)} className={styles.addForm}>
        <label className={styles.formLabel}>
          Name
          <input
            className={styles.formInput}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            onChange={this.handleContactData.bind(this)}
          />
        </label>

        <label className={styles.formLabel}>
          Number
          <input
            className={styles.formInput}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
            onChange={this.handleContactData.bind(this)}
          />
        </label>

        <button type="submit" className={styles.formBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

AddContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleAddContact: PropTypes.func.isRequired,
};

export default AddContactForm;
