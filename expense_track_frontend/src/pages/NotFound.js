import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
    <div className='not-found'>
        <h2 >Sorry</h2>
        <p>That Page cannot be found</p>
        <Link to ='/'>Back homepage...</Link>
    </div>
        
    </div>
  )
}

export default NotFound