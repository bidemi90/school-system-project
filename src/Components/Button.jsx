import React from 'react'

const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick} data-bs-toggle={props.data_bs_toggle} data-bs-target={props.data_bs_target}>
{props.text}
    </button>
  )
}

export default Button