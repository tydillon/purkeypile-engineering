import React from 'react'
import Colors from '../../../config/colors'

const Modal = ({ card, modalIsOpen, setModalIsOpen }) => {
  return (
    <div className={`modal${modalIsOpen && ' is-active'}`}>
      <div className='modal-background' onClick={() => setModalIsOpen(false)} />
      <div className='modal-card'>
        <header className='modal-card-head'>
          <button
            className='modal-close is-large'
            aria-label='close'
            onClick={() => setModalIsOpen(false)}
          ></button>
        </header>
        <section className='modal-card-body'>
          <div className='content'>
            <h1 className='subtitle' style={styles.title}>
              {card.title}
            </h1>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                overflowX: 'scroll',
                maxHeight: '200px',
              }}
            >
              {card.images.map((img) => (
                <img
                  src={require(`../assets/${img}`)}
                  alt={img}
                  key={img}
                  style={styles.img}
                />
              ))}
            </div>
            <strong style={styles.description}>Client: </strong> {card.client}{' '}
            <br />
            <strong style={styles.description}>Year Built: </strong>
            {card.year_built} <br />
            {card.role} <br />
            <strong style={styles.description}>Responsibilities: </strong>
            {card.responsibilities}
            <br />
            <br />
            <p style={{ fontSize: '.8rem' }}>{card.description}</p>
            {card.challenges && (
              <div>
                <span style={styles.label}>
                  Multiple challenges during the design phase:
                </span>
                <ul>
                  {card.challenges.map((challenge, i) => (
                    <li key={`challenge-${i}`}>
                      <strong style={styles.description}>
                        {challenge.title}:{' '}
                      </strong>
                      {challenge.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {card.locations && (
              <div>
                The locations are as follows:
                <ul>
                  {card.locations.map((location, i) => (
                    <li key={`location-${i}`}>{location}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

const styles = {
  title: {
    color: Colors.PURPLE.mid,
    fontFamily: 'Fredericka the Great, cursive',
  },
  description: {
    color: Colors.ORANGE.mid,
  },
  label: { color: Colors.PURPLE.mid },
  img: { width: 'auto', display: 'block', maxHeight: '200px' },
}

export default Modal
