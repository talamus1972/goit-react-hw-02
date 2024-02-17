import { useState } from "react";

import { Description } from "../Description/Description.jsx";
import { Options } from "../Options/Options.jsx";
import { Feedback } from "../Feedback/Feedback.jsx";
import css from "./App.module.css";

export default function App() {
  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };
  return (
    <>
      <Description />
      <div className={css.container}>
        <Options value={clicks.good} onTrack={() => updateFeedback("good")}>
          Good
        </Options>
        <Options
          value={clicks.neutral}
          onTrack={() => updateFeedback("neutral")}
        >
          Neutral
        </Options>
        <Options value={clicks.bad} onTrack={() => updateFeedback("bad")}>
          Bad
        </Options>
      </div>

      <Feedback feedbackCounts={clicks} />
    </>
  );
}
