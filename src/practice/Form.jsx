/* eslint-disable react/prop-types */
import { useState } from "react";
import InputText from "./InputText";

const INIT_CONTACT = {
  name: "",
  email: "",
  group: "",
};

const Form = ({ getContact }) => {
  const [values, setValues] = useState({ ...INIT_CONTACT });

  const { name, email, group } = values;

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setValues(INIT_CONTACT);
    getContact(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputText
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <InputText
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <div>
          <label>Group</label>
          <select name="group" id="group" value={group} onChange={handleChange}>
            <option value="">Select One</option>
            <option value="Office">Office</option>
            <option value="Home">Home</option>
            <option value="Family">Family</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <button type="submit">Create contact</button>
      </form>
    </div>
  );
};

export default Form;
