import React, { useState } from 'react'

export const Charity = ({ charity }) => {
    

    const [showMore, setShowMore] = useState(false)
    const onClick = () => setShowMore(!showMore)


    if (showMore){
        return (
            <div className={'card custom-mb-2'}>
                <div className="card-content">
                    <a className='title is-4' href={ charity.url }>{ charity.name }</a>
                    <div className='content'>
                        <p>{ charity.mission }</p>
                        <p className=''>{ charity.affiliation }</p>
                        <p className=''>{ charity.subsection }</p>
                        <button onClick={onClick} className='button is-dark'>Show Less</button> 
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className={'card custom-mb-2'}>
                <div className="card-content">
                    <a className='title is-4' href={ charity.url }>{ charity.name }</a>
                    <p className='title is-6'>{ charity.tagLine }</p>
                    <button onClick={onClick} className='button is-dark'>Show More</button> 
                </div>
            </div>
        )
    }
    
}
