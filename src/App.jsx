import { useState } from "react";
import "./App.css";
import ContactForm from "./components/Contacts/ContactForm";
import Table from "./components/Table/Table";

function App() {
  const [contacts, setContacts] = useState([]);
  console.log(contacts);

  const getContact = (contact) => {
    setContacts([contact, ...contacts]);
  };

  return (
    <>
      <h1>Explore state lifting</h1>
      <ContactForm getContact={getContact} />
      <Table contacts={contacts} />
    </>
  );
}

export default App;
