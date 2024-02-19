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

        <select></select>

        <button type="submit">Create contact</button>
      </form>
    </div>
  );
};

export default Form;
