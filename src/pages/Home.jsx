/* eslint-disable no-unused-vars */
import React from 'react'
import TaskForm from '../components/TaskForm'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home - Create Task</title>
    </Helmet>
    <div className='w-full flex px-3 justify-center'>
        <div className=''>
          <TaskForm/>
        </div>
    </div>
    </>
  )
}

export default Home