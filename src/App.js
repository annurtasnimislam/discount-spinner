import { useState } from "react";
import { SpinWrapper, UserTable } from "./components";
import Login from "./components/Login/Login";

export default function App() {
  const [showSpin, setShowSpin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userList, setUserList] = useState([]);

  return (
    <div>
      {showSpin ? (
        <>
          <SpinWrapper
            name={name}
            email={email}
            userList={userList}
            setUserList={setUserList}
          />
          <UserTable
            userList={userList}
            setShowSpin={setShowSpin}
            setName={setName}
            setEmail={setEmail}
          />
        </>
      ) : (
        <Login
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          setShowSpin={setShowSpin}
        />
      )}
    </div>
  );
}
