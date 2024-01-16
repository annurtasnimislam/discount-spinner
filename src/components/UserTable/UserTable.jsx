export default function UserTable({
  userList,
  setShowSpin,
  setName,
  setEmail,
}) {
  const handleHideSpin = () => {
    setName("");
    setEmail("");
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.discount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
