import { useState } from "react";
import ContactForm from "./Contacts/ContactForm";
import Table from "./Table/Table";

const MainHome = () => {
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
};

export default MainHome;
