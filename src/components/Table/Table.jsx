/* eslint-disable no-unused-vars */

import { useState } from "react";

/* eslint-disable react/prop-types */
const Table = ({ contacts }) => {
  const [filtered, setFiltered] = useState("all");

  const handleFilter = (e) => {
    setFiltered(e.target.value);
  };

  let filteredContacts = [];
  if (filtered === "all") {
    filteredContacts = contacts;
  } else {
    filteredContacts = contacts.filter((contact) => contact.group === filtered);
  }
  return (
    <>
      <div style={{ margin: "1rem" }}>
        <label htmlFor="filter">Filter contact as: </label>
        <select
          value={filtered}
          name="filter"
          id="filter"
          onChange={handleFilter}
        >
          <option value="">None</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
          <option value="Family">Family</option>
          <option value="Business">Business</option>
        </select>
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
