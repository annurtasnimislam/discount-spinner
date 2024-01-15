import { useEffect, useState } from "react";
import { SegmentForm, SpinWrapper, UserTable } from "./components";
import Login from "./components/Login/Login";
import classes from "./App.module.css";

export default function App() {
  const [showSpin, setShowSpin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userList, setUserList] = useState([]);
  const [state, setState] = useState(false);
  const [segments, setSegments] = useState([
    "10% Discount",
    "20% Discount",
    "50% Discount",
    "30% Discount",
    "5% Discount",
    "No Discount",
  ]);
  const [segColors, setSegColors] = useState([
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#FF9000",
  ]);

  console.log("segments", segments);
  console.log("segColors", segColors);

  return (
    <div>
      {showSpin ? (
        <div className={classes.flex}>
          <SpinWrapper
            name={name}
            email={email}
            userList={userList}
            setUserList={setUserList}
            segments={segments}
            setSegments={setSegments}
            segColors={segColors}
            setSegColors={setSegColors}
          />
          <UserTable
            userList={userList}
            setShowSpin={setShowSpin}
            setName={setName}
            setEmail={setEmail}
          />
          <SegmentForm
            segments={segments}
            setSegments={setSegments}
            segColors={segColors}
            setSegColors={setSegColors}
          />
        </div>
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
