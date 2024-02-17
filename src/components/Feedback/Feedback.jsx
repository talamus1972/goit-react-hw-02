import css from "./Feedback.module.css";

export function Feedback({ feedbackCounts }) {
  return (
    <div className={css.container}>
      <p>Good: {feedbackCounts.good}</p>
      <p>Neutral: {feedbackCounts.neutral}</p>
      <p>Bad: {feedbackCounts.bad}</p>
    </div>
  );
}
