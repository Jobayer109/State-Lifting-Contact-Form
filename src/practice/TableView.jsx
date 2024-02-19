/* eslint-disable react/prop-types */

const TableView = ({ contacts }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Group</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={index}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.group}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
