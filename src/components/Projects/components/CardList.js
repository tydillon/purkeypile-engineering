import React, { useState } from 'react'
import { Card, Modal } from './'

const CardList = ({ cards }) => {
  const [activeCard, setActiveCard] = useState({})
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className={modalIsOpen ? 'is-clipped' : ''}>
      <h2 className='subtitle'>Featured Projects</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          overflowX: 'scroll',
        }}
      >
        {cards.map((card) => (
          <Card
            card={card}
            key={card.title}
            setActiveCard={setActiveCard}
            setModalIsOpen={setModalIsOpen}
          />
        ))}
      </div>
      {modalIsOpen && (
        <Modal
          card={activeCard}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      )}
    </div>
  )
}

export default CardList
