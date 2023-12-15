import React, { useEffect, useRef } from 'react'

const Search = ({search, setSearch}) => {
  const textInputRef = useRef();
  useEffect(()=>{
    textInputRef.current?.focus();
},[])
  return (
    <div className='col-sm-8 mb-4 shadow body-tertiary rounded'>
    <form onSubmit={(e)=> e.preventDefault()}>
        <input
        className='form-control' 
        ref={textInputRef}
            type='search'
            role='searchbox'
            placeholder='Search expense...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
    </div>
  )
}

export default Search
