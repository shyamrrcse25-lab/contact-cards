import { useState } from "react";
import ContactForm from "./components/ContactForm";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts((previousContacts) => [
      ...previousContacts,
      contact,
    ]);
  };

  const deleteContact = (id) => {
    setContacts((previousContacts) =>
      previousContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div className="app">
     <h1>Contact Cards</h1>

<p className="contact-count">
  {contacts.length} {contacts.length === 1 ? "Contact" : "Contacts"}
</p>

      <ContactForm addContact={addContact} />

      <UserList
        contacts={contacts}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;