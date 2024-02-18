import { useEffect, useState } from "react";

import { Description } from "../Description/Description.jsx";
import { Options } from "../Options/Options.jsx";
import { Feedback } from "../Feedback/Feedback.jsx";
import css from "./App.module.css";
import { Notification } from "../Notification/Notification.jsx";




export default function App() {
const savedClick = window.localStorage.getItem("clicks")
const getClicks = () => {
    return savedClick !== null ? JSON.parse(savedClick) : {good: 0, neutral: 0, bad: 0}
  }

  const [clicks, setClicks] = useState(getClicks );

   const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setClicks({ good: 0, neutral: 0, bad: 0 });
    } else {
      setClicks({
        ...clicks,
        [feedbackType]: clicks[feedbackType] + 1,
      });
    }
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positive=Math.round(((clicks.good + clicks.neutral) / totalFeedback) * 100)
  
  useEffect(() => {
  window.localStorage.setItem("clicks", JSON.stringify(clicks) )
  }, [clicks])


   
   return (
    <>
      <Description />
      <div className={css.container}>
        <Options onTrack={() => updateFeedback("good")}>
          Good
        </Options>
        <Options onTrack={() => updateFeedback("neutral")}>
          Neutral
        </Options>
        <Options onTrack={() => updateFeedback("bad")}>
          Bad 
        </Options>
         {totalFeedback > 0 && (
          <Options  onTrack={() => updateFeedback("reset")}>
            Reset
          </Options>
        )}
      </div>
  {totalFeedback > 0 ? (
        <>
           <Feedback feedbackCounts={clicks} />
           
          <p className={css.total}>Total: {totalFeedback} </p>
          <p className={css.positive}>Positive: {positive}% </p>
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}
