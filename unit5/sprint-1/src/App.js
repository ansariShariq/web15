import { useState } from "react";
function App() {
  const [score, setScore] = useState(76);
  const [wicket, setWicket] = useState(2);
  const [over, setOver] = useState(50);
  const [ball, setBall] = useState(1);

  const handleScore = (num) => {
    setScore(num + score);
    //  return score
  };
  const handleWicket = (num) => {
    if(wicket > 11){
      return setWicket(wicket)
    }
    setWicket(num + wicket);
    // return wicket
  };
  const handleOver = () => {
    if (ball === 5) {
      setOver(over + 1);
      return setBall(ball - ball);
    }
    return setBall(ball + 1);

    // return setOver(num + over)
  };

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              `${over + "." + ball}`
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button
          className="addScore1" 
          onClick={() => {
            handleScore(1);
           
          }}
          disabled = {score> 100}
        >
          Add 1
        </button>
        <button
          className="addScore4"
          onClick={() => {
            handleScore(4);
          }}
          disabled = {score> 100}
        >
          Add 4
        </button>
        <button
          className="addScore6"
          onClick={() => {
            handleScore(6);
          }}
          disabled = {score> 100}
        >
          Add 6
        </button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button
          onClick={() => {
            handleWicket(1);
          }}
          disabled = {score> 100}
        >
          Add 1 wicket
        </button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button
          onClick={() => {
            handleOver();
          }}
          disabled = {score> 100}
        >
          Add 1
        </button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <h1 className="status">{score > 100 ? "india Won":null}</h1>
    </div>
  );
}

export default App;
