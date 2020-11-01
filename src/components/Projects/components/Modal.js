import React from 'react'

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
            <h1 className='subtitle'>{card.title}</h1>
            <strong>Client: </strong> {card.client} <br />
            <strong>Year Built: </strong>
            {card.year_built} <br />
            {card.role} <br />
            <strong>Responsibilities: </strong>
            {card.responsibilities}
            <br />
            <br />
            <p>{card.description}</p>
            {card.challenges && (
              <div>
                Multiple challenges during the design phase:
                <ul>
                  {card.challenges.map((challenge, i) => (
                    <li key={`challenge-${i}`}>
                      <strong>{challenge.title}: </strong>
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
        {/* <footer className='modal-card-foot'>
          <a className='button' onClick={closeModal}>
            Cancel
          </a>
        </footer> */}
      </div>
    </div>
  )
}

export default Modal
