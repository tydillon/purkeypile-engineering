import React from 'react'
import { PageWrap } from '../_common'
import pic from './assets/tim_and_nancy.jpg'

const AboutUs = () => {
  return (
    <PageWrap title='About Us'>
      <div style={styles.wrap}>
        <div style={styles.imgWrap}>
          <img src={pic} alt='Tim and Nancy' style={styles.img} />
          <p style={styles.caption}>Tim R. Purkeypile, PE, CFM, Owner </p>
          <p style={styles.caption}>
            Nancy Rupp Purkeypile, Director of Marketing
          </p>
        </div>

        <p style={styles.para}>
          Purkeypile Engineering, LLC was started in 2019 to provide structural
          design services and solutions to clients. We have opened a Civil
          Engineering office in Stillwater Oklahoma specializing in Bridge/
          Structural Design/ Bridge Hydrology & Hydraulics/ 203(k) Consulting.
          We have over 34 years of experience in Oklahoma designing and managing
          bridge design/ rehabilitation projects, providing hydraulic studies
          for bridge replacements, managing multiple county bridge inspection
          programs, and providing quality control for projects. We are humbled
          and blessed to have achieved an excellent reputation in the bridge
          design field and a good understanding of the ODOT/ OTA Policies &
          Procedures. We are unique in that we are small with low overhead rates
          and have many years of experience with high profile projects
          throughout the state since 1986. We are available to bring you years
          of experience and one-on-one attention with your solutions.
        </p>
      </div>
    </PageWrap>
  )
}

const styles = {
  para: {
    fontFamily: 'Open Sans, sans-serif',
    maxWidth: '50vw',
  },
  wrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  imgWrap: {
    // width: '350px',
    margin: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    display: 'block',
    width: '350px',
    height: 'auto',
    marginBottom: '1rem',
  },
  caption: {
    fontSize: '.8rem',
  },
}

export default AboutUs
