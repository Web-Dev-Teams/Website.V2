import React, { use } from 'react'
import './Whatsnew.css'
import { useNavigate } from 'react-router-dom'

const Whatsnew = (props) => {
  const navigate = useNavigate();
  return (
    <div className='whatsnew'>
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
            <button onClick={() => window.open('/whatsnew', '_blank')}>
                Know More
            </button>
        </div>

      </div>
    </div>
  )
}

export default Whatsnew
