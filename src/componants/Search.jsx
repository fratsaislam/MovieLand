import React from 'react'

export const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src='../../public/search.svg' />
            <input type='text' placeholder='Search' value={searchTerm} onChange={(event)=>{setSearchTerm(event.target.value)}} />
        </div>
    </div>
  )
}
