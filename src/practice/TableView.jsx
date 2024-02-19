/* eslint-disable react/prop-types */

import { useState } from "react";

const TableView = ({ contacts }) => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const searchFunc = (contact) =>
    contact.name.includes(searchTerm) || contact.email.includes(searchTerm);

  let filteredContacts = [];
  if (filter === "all") {
    filteredContacts = searchTerm ? contacts.filter(searchFunc) : contacts;
  } else {
    filteredContacts = contacts.filter(
      (contact) => contact.group === filter && searchFunc(contact)
    );
  }
  console.log(filteredContacts);

  return (
    <>
      <div>
        <label>Filter</label>{" "}
        <select
          name="group"
          id="group"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">None</option>
          <option value="all">All</option>
          <option value="Office">Office</option>
          <option value="Home">Home</option>
          <option value="Family">Family</option>
          <option value="Business">Business</option>
        </select>{" "}
        <input
          type="search"
          placeholder="search here"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map(({ name, email, group }, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableView;
