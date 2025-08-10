import React from 'react'
import "./Banner.css"

const Banner = () => {
  return (
    <div className="impact-card">
      <div className="impact-title">Impact</div>
      <div className="impact-stats">
        <div className="stat">
          <div className="stat-number">100+</div>
          <div className="stat-text">volunteers</div>
        </div>
        <div className="stat">
          <div className="stat-number">500+</div>
          <div className="stat-text">students being educated</div>
        </div>
      </div>
    </div>
  )
}

export default Banner