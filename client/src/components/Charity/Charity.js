import React, { useState } from 'react'

export const Charity = ({ charity }) => {
    

    const [showMore, setShowMore] = useState(false)
    const onClick = () => setShowMore(!showMore)

    if (showMore){
        return (
            <div className={'card custom-mb-2'}>
                <div className="card-content">
                    <a className='title is-size-4' href={ charity.url }>{ charity.name }</a>
                    <div className='content'>
                        <p className='is-size-5'>{ charity.mission }</p>
                        <p className='is-size-5'>{ charity.affiliation }</p>
                        <p className='is-size-5'>{ charity.subsection }</p>
                        <button onClick={onClick} className='button is-rounded is-size-6'>Show Less</button> 
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className={'card custom-mb-2'}>
                <div className="card-content">
                    <a className='title is-size-4' href={ charity.url }>{ charity.name }</a>
                    <p className='title is-size-5'>{ charity.tagLine }</p>
                    <button onClick={onClick} className='button is-rounded'>Show More</button> 
                </div>
            </div>
        )
    }
    
}
