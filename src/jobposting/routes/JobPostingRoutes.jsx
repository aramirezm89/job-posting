import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { JobPostingPage } from '../pages'
import { JobAplicant } from '../pages/JobAplicant'
import { LinkedinPage } from '../pages/LinkedinPage'

export const JobPostingRoutes = () => {
  return (
   <Routes>
       <Route path='/' element={<JobPostingPage/>} />
       <Route path='/linkedin' element={<LinkedinPage/>} />
       <Route path='/jobAplicant' element={<JobAplicant/>} />
       <Route path='/*' element={<Navigate to="/"/>} />
   </Routes>
  )
}
