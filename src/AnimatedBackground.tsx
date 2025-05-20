import React, { type CSSProperties, useEffect, useState } from 'react'

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<React.ReactElement[]>([])

  useEffect(() => {
    const createParticles = () => {
      const newParticles = Array.from({ length: 30 }).map((_, i) => {
        const animation = i % 2 === 0 ? 'float 4s infinite linear' : 'float2 4s infinite linear'
        
        const style: CSSProperties = {
          position: 'absolute',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `${animation} ${Math.random() * 2}s`,
          background: `hsl(${Math.random() * 360}, 70%, 60%)`,
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          opacity: 0.7,
          pointerEvents: 'none',
        }
        return <div key={i} style={style} />
      })
      setParticles(newParticles)
    }

    createParticles()
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(45deg, #1a1a2e, #16213e, #0f3460, #533483)',
      overflow: 'hidden',
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '20vw',
        fontWeight: 900,
        color: 'rgba(255, 255, 255, 0.05)',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        fontFamily: '"Arial Black", sans-serif',
      }}>
        HANGMAN
      </div>
      
      <div style={{ 
        position: 'absolute',
        width: '100%',
        height: '100%',
        animation: 'sweep 8s infinite linear'
      }}>
        {particles}
      </div>
    </div>
  )
}

export default AnimatedBackground