import { useState } from "react";
import InputText from "./InputText";

const INIT_CONTACT = {
  name: "",
  email: "",
};

const Form = () => {
  const [values, setValues] = useState({ ...INIT_CONTACT });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setValues(INIT_CONTACT);
    console.log(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputText
          label="Name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <InputText
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />

        <div>
          <label htmlFor="group">Group</label>
          <select
            name="group"
            id="group"
            value="Select One"
            onChange={handleChange}
          >
            <option defaultValue="">Select One</option>
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
