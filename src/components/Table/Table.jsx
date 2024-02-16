/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Table = ({ contacts }) => {
  console.log(contacts);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(({ id, name, email, group }) => (
            <tr key={id}>
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

export default Table;
