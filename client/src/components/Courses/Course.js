import React, { useState } from 'react'

export const Course = ({ course }) => {
    
    const [showMore, setShowMore] = useState(false)
    const onClick = () => setShowMore(!showMore)
    
    if (showMore){
        return (
            <div className={'card custom-mb-2'}>
                <div className="card-content">
                    <a className='title is-4' href={ course.link }>{ course.title }</a>
                    <div className='content'>
                        <p>Offered by: { course.university }</p>
                        <p>{ course.rating } / 5</p>
                        <p>{ course.enrollement } students are enrolled.</p>
                        <p>Difficulty: { course.difficulty }</p>
                        <button onClick={onClick} className='button is-dark'>Show Less</button> 
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className={'card custom-mb-2'}>
                <div className="card-content">
                    <a className='title is-4' href={ course.link }>{ course.title }</a>
                    <p className='title is-6'>Offered by: { course.university }</p>
                    <button onClick={onClick} className='button is-dark'>Show More</button> 
                </div>
            </div>
        )
    }
    
}
