import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { JobPostingPage } from '../pages'

export const JobPostingRoutes = () => {
  return (
   <Routes>
       <Route path='/' element={<JobPostingPage/>} />
       <Route path='/*' element={<JobPostingPage/>} />
   </Routes>
  )
}
