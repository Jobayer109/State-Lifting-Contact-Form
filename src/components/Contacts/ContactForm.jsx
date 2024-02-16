import { useState } from "react";
import shortid from "shortid";
import InputField from "./InputField";

const CONTACT_INIT_STATE = {
  id: shortid.generate(),
  name: "",
  email: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState({ ...CONTACT_INIT_STATE });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
    setContact(CONTACT_INIT_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Name:"
        type="text"
        name="name"
        value={contact.name}
        onChange={handleChange}
      />{" "}
      <br />
      <InputField
        label="Email:"
        type="email"
        name="email"
        value={contact.email}
        onChange={handleChange}
      />{" "}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
