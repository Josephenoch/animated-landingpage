import React from 'react'
import { SearchIcon } from '../icons'

const SearchComponent = () => {
  return (
    <div className="relative">
        <SearchIcon className="flex-shrink-0 left-3 absolute -translate-y-1/2 top-1/2"/>
        <input 
            placeholder="Search Creators"
            className='px-10 py-3 w-[230px]  rounded-[28px] bg-black/5 focus:outline-none focus:border-none placeholder:text-[#616161] text-[#616161]'
        />
    </div>
  )
}

export default SearchComponent