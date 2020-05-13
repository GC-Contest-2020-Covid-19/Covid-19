import React, { useState } from 'react'

export const Course = ({ course }) => {
    
    const [showMore, setShowMore] = useState(false)
    const onClick = () => setShowMore(!showMore)
    
    if (showMore){
        return (
            <div className={'card custom-mb-2'}>
                <div className="card-content">
                    <a className='title is-size-4' href={ course.link }>{ course.title }</a>
                    <div className='content'>
                        <p className='is-size-5'>Offered by: { course.university }</p>
                        <p className='is-size-5'>Rating: { course.rating } / 5</p>
                        <p className='is-size-5'>{ course.enrollement } students are enrolled.</p>
                        <p className='is-size-5'>Difficulty: { course.difficulty }</p> 
                        <button onClick={onClick} className='button is-rounded'>Show Less</button> 
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className={'card custom-mb-2'}>
                <div className="card-content">
                    <a className='title is-size-4' href={ course.link }>{ course.title }</a>
                    <p className='title is-size-5'>Offered by: { course.university }</p>
                    {course.rating ? <button onClick={onClick} className='button is-rounded'>Show More</button> : null}
                </div>
            </div>
        )
    }
    
}
