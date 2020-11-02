import React from 'react'
import { Link } from 'react-router-dom'
import Colors from '../../../config/colors'

const Card = ({ card, i }) => {
  const pickPrimary = (ind) => {
    return ind % 2 === 0 ? Colors.PURPLE.mid : Colors.ORANGE.mid
  }
  const pickSecondary = (ind) => {
    return ind % 2 === 0 ? Colors.ORANGE.light : Colors.PURPLE.light
  }
  return (
    <div style={styles.wrap}>
      <span className='icon is-large' style={{ margin: '1rem' }}>
        <i
          className={`fas fa-3x fa-${card.icon}`}
          style={{ color: pickPrimary(i) }}
        ></i>
      </span>
      <h1
        style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}
      >
        {card.title}
      </h1>
      <p style={{ fontSize: '.8rem', marginBottom: '1rem' }}>
        {card.description}
      </p>
      <Link to={card.to}>
        <button
          className='button'
          style={{
            backgroundColor: pickSecondary(i),
            color: i % 2 === 0 ? 'black' : 'white',
          }}
        >
          Learn more
        </button>
      </Link>
    </div>
  )
}

const styles = {
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default Card
