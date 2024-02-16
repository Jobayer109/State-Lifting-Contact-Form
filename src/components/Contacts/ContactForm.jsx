/* eslint-disable react/prop-types */
import { useState } from "react";
import shortid from "shortid";
import InputField from "./InputField";

const CONTACT_INIT_STATE = {
  id: shortid.generate(),
  name: "",
  email: "",
};

const ContactForm = ({ getContact }) => {
  const [contact, setContact] = useState({ ...CONTACT_INIT_STATE });

  const { name, email } = contact;

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getContact(contact);
    setContact(CONTACT_INIT_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Name:"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />{" "}
      <br />
      <InputField
        label="Email:"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />{" "}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
