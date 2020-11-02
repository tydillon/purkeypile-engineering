import React from 'react'
import { PageWrap } from '../_common'

const Contact = () => {
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
              <input className='input' type='text' placeholder='Name' />
            </div>
          </div>
          <div className='field'>
            <label className='label'>E-mail</label>
            <div className='control'>
              <input className='input' type='text' placeholder='E-mail' />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Phone Number</label>
            <div className='control'>
              <input className='input' type='text' placeholder='Phone Number' />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Message</label>
            <div className='control'>
              <textarea
                className='textarea'
                placeholder='Tell us about how we can help you!'
              ></textarea>
            </div>
          </div>
          <div className='field is-grouped'>
            <div className='control'>
              <button className='button is-link'>Submit</button>
            </div>
            <div className='control'>
              <button className='button is-link is-light'>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </PageWrap>
  )
}

export default Contact
