import React from 'react'

const SearchInput = ({ searchChange }) => {
  return (
    <input
      onChange={searchChange}
      className='db center ma3 pa3 ba b--green bg-lightest-blue outline-0 br2'
      type='search'
      placeholder='search robots'
    />
  )
}

export default SearchInput