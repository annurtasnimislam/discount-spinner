export default function Login(props) {
  const handleLogin = (e) => {
    e.preventDefault();
    props.setShowSpin(true);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Name:
          <input
            type="text"
            value={props.name}
            onChange={(e) => props.setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={props.email}
            onChange={(e) => props.setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Try Your Luck</button>
      </form>
    </div>
  );
}
