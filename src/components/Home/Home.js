import React from 'react'
import bridge from './assets/proj-3-1-bw.jpg'
import { CardList } from './components'

const Home = () => {
  return (
    <div>
      <div style={styles.topDiv}>
        <div className='is-overlay' style={styles.overlay}></div>
        <div style={styles.spacing}>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              marginTop: '10rem',
              //backgroundColor: Colors.PURPLE.mid,
            }}
            className='is-overlay'
          >
            <div
              className='title'
              style={{
                color: 'white',
                fontSize: '4rem',
                //fontFamily: 'Fredericka the Great, cursive',
              }}
            >
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
      <CardList />
      <section className='hero is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>Tim R. Purkeypile, PE, CFM, Owner</h1>
            <h2 className='subtitle'>
              2324 W. 7th Place, Suite 8<br />
              Stillwater,Oklahoma 74074 <br />
              (405)-255-9388 <br />
              tim@purkeypileengineering.com
              <br />
              website: purkeypileengineering.com
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  topDiv: {
    //backgroundColor: Colors.PURPLE.mid,
    background: `url(${bridge})`,
    backgroundSize: 'cover',
    height: '75vh',
  },
  spacing: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
  },
  overlay: {
    background:
      'linear-gradient(to bottom, rgba(81, 40, 136, 1), rgba(81, 40, 136, 1) 15%, rgba(81, 40, 136, .6))',
    height: '90vh',
  },
}

export default Home
