import { useState } from "react";
import { SegmentForm, SpinWrapper, UserTable } from "./components";
import Login from "./components/Login/Login";
import classes from "./App.module.css";

export default function App() {
  const [showSpin, setShowSpin] = useState(true);
  const [active, setActive] = useState(true);

  const [userList, setUserList] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
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

  return (
    <div>
      <div className={classes.flex}>
        <SpinWrapper
          userList={userList}
          setUserList={setUserList}
          isLogin={isLogin}
          segments={segments}
          setSegments={setSegments}
          segColors={segColors}
          setSegColors={setSegColors}
          active={active}
          setActive={setActive}
        />
        {/* <Login
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          setShowSpin={setShowSpin}
          setIsLogin={setIsLogin}
        /> */}

        <UserTable userList={userList} />

        <SegmentForm
          segments={segments}
          setSegments={setSegments}
          segColors={segColors}
          setSegColors={setSegColors}
        />
      </div>
    </div>
  );
}
