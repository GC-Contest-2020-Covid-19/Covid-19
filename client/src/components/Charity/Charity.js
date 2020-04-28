import React, { useState } from 'react'

export const Charity = ({ charity }) => {
    

    const [showMore, setShowMore] = useState(false)
    const onClick = () => setShowMore(!showMore)


    if (showMore){
        return (
            <div className={'max-w-sm w-full lg:max-w-full lg:flex'}>
                <div className="mb-8 min-w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <a className='text-2xl' href={ charity.url }>{ charity.name }</a>
                    <p>{ charity.mission }</p><br/>
                    <p className='text-sm'>{ charity.affiliation }</p>
                    <p className='text-sm'>{ charity.subsection }</p><br/>
                    <button onClick={onClick}>Show Less</button> 
                </div>
            </div>
        )
    }else{
        return (
            <div className={'max-w-sm w-full lg:max-w-full lg:flex'}>
                <div className="mb-8 min-w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <a className='text-2xl' href={ charity.url }>{ charity.name }</a>
                    <p>{ charity.tagLine }</p><br/>
                    <button onClick={onClick}>Show More</button> 
                </div>
            </div>
        )
    }
    
}
