import React from 'react'
import Card from './Card'

const cards = [
  {
    icon: 'user-graduate',
    title: 'Experience',
    description: 'Years of experience in the field',
    to: '/credentials',
  },
  {
    icon: 'house-user',
    title: 'Family',
    description: 'A small business with family values',
    to: '/about',
  },
  {
    icon: 'tasks',
    title: 'Services',
    description: 'A variety of services to fit your needs',
    to: '/clients',
  },
]

const CardList = () => {
  return (
    <div style={styles.wrap}>
      {cards.map((card, i) => (
        <Card card={card} key={card.title} i={i} />
      ))}
    </div>
  )
}

const styles = {
  wrap: {
    margin: '3rem 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
}

export default CardList
