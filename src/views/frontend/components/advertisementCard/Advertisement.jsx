import React from 'react'
import { Link } from 'react-router-dom'

const Advertisement = () => {
  return (
    <aside className='advertisement__wrapper'>
        <div className="advertisement__container">
            <h6>Advertisement</h6>
            <Link to="#" className='advertisement__card'>
                <img src="" alt=""/>
                <div className="advertisement__badge">
                    <span>Ad</span>
                </div>
                <div className="advertisement__text">
                    <h4></h4>
                    <p></p>
                </div>
            </Link>
        </div>
      
    </aside>
  )
}

export default Advertisement
