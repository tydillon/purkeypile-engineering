import React from 'react'
import { CardList, ProjectList } from './components'
import featured from './featured.json'
import projectList from './list.json'
import { PageWrap } from '../_common'

const Projects = () => {
  return (
    <PageWrap title='Projects'>
      <CardList cards={featured} />
      <ProjectList projects={projectList} />
    </PageWrap>
  )
}

export default Projects
