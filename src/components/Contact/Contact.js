import React, { useState } from 'react'
import { PageWrap } from '../_common'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    const body = { name, email, phone, message }
    console.log({ body })
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
  }

  const handleCancel = () => {
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
  }
  return (
    <PageWrap title='Contact Us'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          minHeight: '75vh',
          alignItems: 'center',
        }}
      >
        <div className='card' style={{ minWidth: '500px', padding: '3rem' }}>
          <div className='field'>
            <label className='label'>Name</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>E-mail</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='E-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Phone Number</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='Phone Number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Message</label>
            <div className='control'>
              <textarea
                className='textarea'
                placeholder='Tell us about how we can help you!'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className='field is-grouped'>
            <div className='control'>
              <button className='button is-link' onClick={handleSubmit}>
                Submit
              </button>
            </div>
            <div className='control'>
              <button
                className='button is-link is-light'
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageWrap>
  )
}

export default Contact
