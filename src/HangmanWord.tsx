
type HangmanWordProps = {
  guessedLetter: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({ guessedLetter, wordToGuess, reveal = false }: HangmanWordProps) {
  return (
    <div style={{
      display: "flex",
      gap: "0.5rem",
      fontSize: "clamp(2rem, 5vw, 4rem)",
      fontWeight: "bold",
      textTransform: "uppercase",
      fontFamily: "monospace",
      flexWrap: "wrap",
      justifyContent: "center"
    }}>
      {wordToGuess.split("").map((letter, index) => (
        <span 
          style={{ 
            borderBottom: ".1em solid black",
            transition: "color 0.3s ease"
          }} 
          key={index}
        >
          <span style={{
            visibility: guessedLetter.includes(letter) || reveal ? "visible" : "hidden",
            color: !guessedLetter.includes(letter) && reveal ? "red" : "green",
            opacity: guessedLetter.includes(letter) ? 1 : 0.8
          }}>
            {letter}
          </span>  
        </span>
      ))}
    </div>
  )
}