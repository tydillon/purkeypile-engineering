import React from 'react'
import { Title } from './'

const PageWrap = ({ children, title }) => (
  <div style={{ margin: '2rem' }}>
    <Title title={title} />
    {children}
  </div>
)

export default PageWrap
