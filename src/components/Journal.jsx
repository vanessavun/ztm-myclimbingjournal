import React from 'react'
import Entry from './Entry'
import data from '../data'

export default function Journal() {
    const entries = data.map(item => {
        return (
            <Entry 
                key={item.id}
                item={item}
            />
        )
    })

    return(
        <div>
            {entries}
        </div>
    )
}