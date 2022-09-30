import React from 'react'

export const Button = (props: any) => {
  return (
    <span className='pages' >
        {props.page > 1 && 
        <button className='page' onClick={props.handleDecrease} >Previous</button>}
        <h3>Page {props.page}</h3>
        {props.page < 4 && <button className="page" onClick={props.handleIncrease} >Next</button>}
    </span>
  )
}
