import { useState } from "react";
import Spinner from "../Spinner/Spinner";
import classes from "./SpinWrapper.module.css";

export default function SpinWrapper({
  name,
  email,
  setUserList,
  segments,
  segColors,
}) {
  const onFinished = (winner) => {
    const singleUser = {
      name: name,
      email: email,
      discount: winner,
    };

    setUserList((prevUserList) => [...prevUserList, singleUser]);
  };

  return (
    <div className={classes.wrapper}>
      <div id="wheelCircle">
        <Spinner
          segments={segments}
          segColors={segColors}
          winningSegment=""
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          primaryColoraround="#ffffffb4"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={200}
          upDuration={50}
          downDuration={500}
        />
      </div>
      <div></div>
    </div>
  );
}
