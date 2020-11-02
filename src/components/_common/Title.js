import React from 'react'

const Title = ({ title }) => (
  <div style={styles.wrap}>
    <h1 className='title' style={styles.title}>
      {title}
    </h1>
  </div>
)
const styles = {
  wrap: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontFamily: 'Fredericka the Great, cursive',
    textTransform: 'uppercase',
  },
}
export default Title
