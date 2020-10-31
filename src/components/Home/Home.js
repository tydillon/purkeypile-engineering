import React from 'react'
import Colors from '../../config/colors'
//import bridge from './assets/orangesketch.png'

const Home = () => {
  return (
    <div>
      <div style={styles.topDiv}>
        <div style={styles.spacing}>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}
          >
            <div className='title' style={{ color: 'white' }}>
              Reaching new heights
            </div>
            <div className='subtitle' style={{ color: 'white' }}>
              One Bridge at a Time
            </div>
          </div>
          <div style={styles.bridge}></div>
          {/* <div style={{ width: '100%', height: '100%' }}>
            <img src={bridge} alt='Skydance Bridge' style={styles.bridge} />
          </div> */}
        </div>
      </div>
      <div>
        Tim R. Purkeypile, PE, CFM, Owner <br />
        2324 W. 7th Place, Suite 8<br />
        Stillwater,Oklahoma 74074 <br />
        (405)-255-9388 <br />
        tim@purkeypileengineering.com
        <br />
        website: purkeypileengineering.com
      </div>
    </div>
  )
}

const styles = {
  topDiv: {
    backgroundColor: Colors.PURPLE.mid,
    height: '75vh',
  },
  spacing: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
  },
  bridge: {
    // backgroundImage: `url(${bridge})`,
    // width: '100%',
    // height: '100%',
    // /* you need to match the shadow color to your background or image border for the desired effect*/
    // boxShadow: `0 0 8px 8px ${Colors.PURPLE.mid} inset`,
    // // width: '50%',
  },
}

export default Home
