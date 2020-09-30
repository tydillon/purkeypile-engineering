import React from 'react'
import { splitEvery } from 'ramda'

const Logo = () => {
  const styles = {
    border: {
      border: '5px solid white',
      display: 'flex',
      flexDirection: 'column',
      margin: '1rem',
    },
    top: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '1.5rem',
    },
    bottom: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '.75rem',
    },
    letter: {
      margin: '0px 3px',
      fontFamily: 'Fredericka the Great, cursive',
      textTransform: 'uppercase',
      color: 'white',
    },
  }
  const topWord = splitEvery(1, 'Purkeypile')
  const bottomWords = splitEvery(1, 'Engineering, LLC')

  return (
    <div style={styles.border}>
      <div style={styles.top}>
        {topWord.map((letter, i) => (
          <div style={styles.letter} key={`top-${letter}-${i}`}>
            {letter}
          </div>
        ))}
      </div>

      <div style={styles.bottom}>
        {bottomWords.map((letter, i) => (
          <div style={styles.letter} key={`bottom-${letter}-${i}`}>
            {letter}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Logo
