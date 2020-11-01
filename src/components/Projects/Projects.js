import React from 'react'
import { CardList, ProjectList } from './components'
import featured from './featured.json'
import projectList from './list.json'

const Projects = () => {
  return (
    <div>
      <h1 className='title'>Projects</h1>
      <CardList cards={featured} />
      <ProjectList projects={projectList} />
    </div>
  )
}

export default Projects
