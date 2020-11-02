import React from 'react'
import Colors from '../../../config/colors'

const Card = ({ card, setActiveCard, setModalIsOpen }) => {
  const handleModal = ({ card }) => {
    setActiveCard(card)
    setModalIsOpen(true)
  }
  return (
    <div
      className='card'
      style={{ width: '300px', margin: '1rem', flex: '0 0 auto' }}
    >
      <div className='card-image'>
        <figure className='image is-4by3'>
          {card.images.length > 0 && (
            <img
              src={require(`../assets/${card.images[0]}`)}
              alt={card.title}
            />
          )}
        </figure>
      </div>
      <div className='card-content' style={{ height: '44%' }}>
        <p className='subtitle'>{card.title}</p>

        <div className='content'>{card.role}</div>
      </div>
      <footer
        className='card-footer'
        style={{
          cursor: 'pointer',
          backgroundColor: Colors.ORANGE.mid,
          color: 'white',
        }}
        onClick={() => handleModal({ card })}
      >
        <p className='card-footer-item'>
          <span>Learn more</span>
        </p>
      </footer>
    </div>
  )
}

export default Card
