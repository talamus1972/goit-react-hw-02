import css from "./Options.module.css";

export function Options({onTrack, children }) {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={onTrack}>
        {children} 
      </button>
    </div>
  );
}
