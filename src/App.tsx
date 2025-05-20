import { useCallback, useEffect, useState } from 'react'
import { HangmanDrawing } from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import { Keyboard } from './Keyboard'
import words from './wordlist.json'
import AnimatedBackground from './AnimatedBackground'

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const inCorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = inCorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isWinner || isLoser) return
    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isWinner, isLoser])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler)
    return () => document.removeEventListener("keypress", handler)
  }, [addGuessedLetter])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== "Enter") return
      e.preventDefault()
      setWordToGuess(getWord())
      setGuessedLetters([])
    }
    document.addEventListener("keypress", handler)
    return () => document.removeEventListener("keypress", handler)
  }, [])

  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        <AnimatedBackground />
      </div>

      {/* Scrollable Game Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        height: '100vh',
        overflowY: 'auto', // Enable vertical scrolling
        padding: '20px',
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          minHeight: '100vh' // Ensure content fills viewport
        }}>
          {/* Header Section */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '1.5rem',
              color: isWinner ? '#4CAF50' : isLoser ? '#e94560' : 'transparent',            }}>
              {isWinner && "🎉 Winner! Press Enter to Play Again"}
              {isLoser && `😢 Game Over! The word was: ${wordToGuess}`}
            </div>
          </div>

          {/* Game Content */}
          <div style={{ 
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
            <HangmanWord 
              reveal={isLoser}
              guessedLetter={guessedLetters} 
              wordToGuess={wordToGuess} 
            />
          </div>

          {/* Keyboard */}
          <div style={{ 
            marginTop: 'auto',
            width: '100%'
          }}>
            <Keyboard
              disabled={isWinner || isLoser}
              activeLetters={guessedLetters.filter(letter => 
                wordToGuess.includes(letter)
              )}
              inactiveLetters={inCorrectLetters}
              addGuessedLetter={addGuessedLetter}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App