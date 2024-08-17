import React from 'react'
import './Mission.css'
import { assets } from '../../assets/assets'

const Mission = () => {
    return (
        <div className='mission'>
            <div className="mission-contents">
                <div className="mission-image">
                    <img src={assets.legal} alt="" />
                </div>
                <div className="mission-texts">

                </div>
            </div>
        </div>
    )
}

export default Mission