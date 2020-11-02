import React from 'react'
import { PageWrap } from '../_common'
import pic from './assets/headshot.jpg'
import Colors from '../../config/colors'

const Credentials = () => {
  return (
    <PageWrap title='Credentials'>
      <div style={styles.flexWrap}>
        <img src={pic} alt='Tim Purkeypile' style={styles.img} />
        <ul style={styles.list}>
          <li>BS in Civil Engineering from Kansas State University in 1985</li>
          <li>Oklahoma Professional Engineer in 1990 – PE #16021.</li>
          <li>
            Oklahoma Certified Floodplain Manager 2006 - Certification
            #OK-06-00019
          </li>
          <li>HUD Approved 203(K) Consultant - Consultant I.D. No. D1154 </li>
          <li>
            Thirty-Four (34) total years of experience as a civil engineer in
            Oklahoma for both the Private and Public Sectors.
            <ul style={styles.sublist}>
              <li>
                Twenty-Seven (27) years of experience as a Project Manager/
                Quality Control for numerous bridge inspections/ replacement/
                rehabilitation projects throughout Oklahoma.
              </li>
              <li>
                Seven (7) years of experience with ODOT providing bridge
                designs, hydraulic studies, quality control, & implementation of
                their On-System Scour Critical Bridge Evaluation Program.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </PageWrap>
  )
}

const styles = {
  flexWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  img: {
    margin: '1rem',
    borderRadius: '50%',
  },
  list: {
    maxWidth: '50vw',
    fontWeight: 'bold',
    listStyleType: 'square',
    color: Colors.PURPLE.mid,
  },
  sublist: {
    marginLeft: '2rem',
    fontWeight: 'normal',
    listStyleType: 'circle',
  },
}

export default Credentials
