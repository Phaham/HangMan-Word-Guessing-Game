import styles from "./Keyboard.module.css";

type KeyboardProps = {
  disabled: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void  // Fix prop name (singular)
}

export function Keyboard({
  activeLetters,
  disabled,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) {
  const KEYBOARD_ROWS = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"]
  ]

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      width: '100%',
    }}>
      {KEYBOARD_ROWS.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))',
            gap: '0.3rem',
            justifyContent: 'center',
          }}
        >
          {row.map(key => (
            <button
              key={key}
              onClick={() => addGuessedLetter(key)}
              className={`${styles.btn} 
                ${activeLetters.includes(key) ? styles.active : ''} 
                ${inactiveLetters.includes(key) ? styles.inactive : ''}`}
              disabled={disabled || activeLetters.includes(key) || inactiveLetters.includes(key)}
              style={{
                minWidth: '50px',
              }}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}