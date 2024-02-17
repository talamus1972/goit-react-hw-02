import css from "./Options.module.css";

export function Options({ value, onTrack, children }) {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={onTrack}>
        {children}: {value}
      </button>
    </div>
  );
}
