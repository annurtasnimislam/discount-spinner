import Spinner from "../Spinner/Spinner";
import classes from "./SpinWrapper.module.css";

export default function SpinWrapper({ name, email, setUserList }) {
  const segments = [
    "10% Discount",
    "20% Discount",
    "50% Discount",
    "30% Discount",
    "5% Discount",
    "No Discount",
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    // "#F9AA1F",
    // "#EC3F3F",
    "#FF9000",
  ];
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
