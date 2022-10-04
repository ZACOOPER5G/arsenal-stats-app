import { ReactComponent as Arrow } from '../images/right-arrow.svg'

export const Button = (props: any) => {
  return (
    <span className='pages' >
        {props.page > 1 && <Arrow className='previous' onClick={props.handleDecrease} >Previous</Arrow>}
        <h3 className='page' >Page {props.page}</h3>
        {props.page <= 3 && <Arrow className="next" onClick={props.handleIncrease} >Next</Arrow>}
    </span>
  )
}