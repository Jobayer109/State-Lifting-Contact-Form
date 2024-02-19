import { useState } from "react";
import Form from "./Form";
import TableView from "./TableView";
import "./style.css";

const PracticeHome = () => {
  const [contacts, setContacts] = useState([]);

  const getContact = (contact) => {
    setContacts([contact, ...contacts]);
  };

  return (
    <div className="practiceApp">
      <h2>Practice State lifting by Form</h2>
      <hr style={{ marginTop: ".5rem", marginBottom: ".5rem" }} />
      <Form getContact={getContact} />
      <TableView contacts={contacts} />
    </div>
  );
};

export default PracticeHome;
