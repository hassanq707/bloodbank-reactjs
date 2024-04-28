import React from 'react'

const Categories = ({filterItem,items}) => {
  return (
    <div className='button_div'>
        <button onClick={()=> filterItem('O')}>O</button>
        <button onClick={()=> filterItem('A')}>A</button>
        <button onClick={()=> filterItem('B')}>B</button>
        <button onClick={()=> filterItem('AB')}>AB</button>
        <button onClick={()=> filterItem('All')}>All</button>
    </div>
  )
}

export default Categories