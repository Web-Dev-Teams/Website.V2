import React from 'react'
import './Whatsnew.css'

const Whatsnew = (props) => {
  return (
    <div>
      <div className='whatsnew-box'>
        <div className='whatsnew-left'>
            <img src={props.image} alt="picture" />


        </div>
        <div className='whatsnew-right'>
            <div className='whatsnew-right-heading'>
                {props.heading}

            </div>
            <div className='whatsnew-right-content'>
                 {props.content}
            </div>
            <button >
                Know More
            </button>
        </div>

      </div>
    </div>
  )
}

export default Whatsnew
