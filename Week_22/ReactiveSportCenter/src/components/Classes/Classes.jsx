import React from 'react'
import ClassesHeader from './ClassesHeader'
import ClassesContainerYoga from './ClassesContainerYoga'

const Classes = () => {
  return (
    <div id="classes-ontainer" className="classes-container">
        <div className="yoga-img-clip"></div>
        <ClassesHeader />
        <ClassesContainerYoga />
    </div>
  )
}

export default Classes

