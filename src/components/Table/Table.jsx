/* eslint-disable no-unused-vars */

import { useState } from "react";
import InputField from "../Contacts/InputField";

/* eslint-disable react/prop-types */
const Table = ({ contacts }) => {
  const [filtered, setFiltered] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  // Search and filter operation
  const searchFunc = (contact) =>
    contact.name.includes(searchTerm) || contact.email.includes(searchTerm);

  let filteredContacts = [];
  if (filtered === "all") {
    filteredContacts = searchTerm ? contacts.filter(searchFunc) : contacts;
  } else {
    filteredContacts = contacts.filter(
      (contact) => contact.group === filtered && searchFunc(contact)
    );
  }

  return (
    <>
      <div style={{ margin: "1rem" }}>
        <label htmlFor="filter">Filter contact as: </label>
        <select
          value={filtered}
          name="filter"
          id="filter"
          onChange={(e) => setFiltered(e.target.value)}
        >
          <option value="">None</option>
          <option value="all">All</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
          <option value="Family">Family</option>
          <option value="Business">Business</option>
        </select>

        <InputField
          label="Search: "
          name="search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        {" "}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Group</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map(({ name, email, group }, i) => (
              <tr key={i}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{group}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
