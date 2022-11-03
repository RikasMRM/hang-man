import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  activeLetters: string[];
  inacticeLetters: string[];
  addGuessedLetter: (leter: string) => void;
};

export function Keyboard({
  activeLetters,
  inacticeLetters,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(70px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActice = activeLetters.includes(key);
        const isInactice = inacticeLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} 
            ${isActice ? styles.active : ""} 
            ${isInactice ? styles.inactive : ""}`}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
