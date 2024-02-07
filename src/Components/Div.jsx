import React from 'react'

const Div = (props) => {
  return (
    <div className={props.className} id={props.id}>
        {props.text}
    </div>
  )
}

export default Div