import { useState } from "react";
import "./App.css";
import ContactForm from "./components/Contacts/ContactForm";
import Table from "./components/Table/Table";

function App() {
  const [contacts, setContacts] = useState([]);

  const getContact = (contact) => {
    setContacts([contact, ...contacts]);
  };

  return (
    <>
      <h1>My Contact App</h1>
      <ContactForm getContact={getContact} />
      <Table contacts={contacts} />
    </>
  );
}

export default App;
