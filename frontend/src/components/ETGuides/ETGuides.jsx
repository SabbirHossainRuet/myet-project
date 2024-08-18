import React, { useContext } from 'react'
import './ETGuides.css'
import { StoreContext } from '../Context/StoreContext'

const ETGuides = () => {
    const { et_list, et_bundle } = useContext(StoreContext)
    return (
        <div className='et-guides'>
            <div className="et-guides-container">
                <p className='title'>Services</p>
                <br />
                <hr />
                <div className="et-list">
                    {et_list.map((item, index) => (
                        <>
                            <div className="et-list-item" key={index}>
                                <h3>{item.name}</h3>
                                <p className='price'>{item.price === 0 ? "Free" : `£${item.price}`}</p>
                                <button>{item.price === 0 ? "Download" : "Buy"}</button>
                                <p className='description'>{item.description}</p>

                            </div>
                        </>
                    ))
                    }
                    
                </div>
                <div className="et-bundle">
                    {et_bundle.map((item, index) => (
                        <>
                            <div className="et-bundle-item" key={index}>
                                <h3>{item.name}</h3>
                                <p className='price'>{item.price === 0 ? "Free" : `£${item.price}`}</p>
                                <p className='text'>{item.text}</p>
                                <button>{item.price === 0 ? "Download" : "Buy"}</button>
                                
                                <p className='description'>{item.description}</p>

                            </div>
                        </>
                    ))
                    }
                    
                </div>
            </div>

            
            

        </div >
    )
}

export default ETGuides