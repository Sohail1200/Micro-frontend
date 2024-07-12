import React from 'react'
import Header from './Header'

const LayoutContainer = ({Component}) => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header/>
      <div className='container'>
      <Component/>
      </div>
    </div>
  )
}

export default LayoutContainer
