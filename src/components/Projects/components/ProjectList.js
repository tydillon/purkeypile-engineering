import React, { useState, useEffect } from 'react'
import { isEmpty, reduce, concat } from 'ramda'
import Colors from '../../../config/colors'

const ProjectList = ({ projects }) => {
  const [activeProjects, setActiveProjects] = useState({})
  const [activeTab, setActiveTab] = useState('All')

  const handleAll = (allProj) => {
    setActiveProjects(reduce((acc, cur) => concat(cur.list, acc), [], allProj))
    setActiveTab('All')
  }

  const handleType = (project) => {
    setActiveProjects(project.list)
    setActiveTab(project.title)
  }

  useEffect(() => {
    handleAll(projects)
  }, [projects])

  return (
    <nav className='panel' style={{ margin: '3rem', height: '500px' }}>
      <p
        className='panel-heading'
        style={{ backgroundColor: Colors.PURPLE.light, color: 'white' }}
      >
        Project List
      </p>
      <div className='panel-tabs'>
        <div
          className='is-active'
          style={
            activeTab === 'All'
              ? { ...styles.tabTitle, ...styles.activeTab }
              : styles.tabTitle
          }
          onClick={() => handleAll(projects)}
        >
          All
        </div>
        {projects.map((project) => (
          <div
            key={project.title}
            style={
              activeTab === project.title
                ? { ...styles.tabTitle, ...styles.activeTab }
                : styles.tabTitle
            }
            onClick={() => handleType(project)}
          >
            {project.title}
          </div>
        ))}
      </div>
      <div style={{ maxHeight: '400px', overflow: 'auto' }}>
        {!isEmpty(activeProjects) &&
          activeProjects.map((item, i) => (
            <div key={`${item}-${i}`} className='panel-block'>
              {item}
            </div>
          ))}
      </div>
    </nav>
  )
}

const styles = {
  tabTitle: {
    margin: '.5rem 1rem',
    cursor: 'pointer',
  },
  activeTab: {
    color: Colors.ORANGE.mid,
    borderBottom: `1px solid ${Colors.ORANGE.mid}`,
  },
}

export default ProjectList
