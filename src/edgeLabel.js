import React from 'react'

export default function EdgeLabel(props) {
  return (
     <div className="edgeLabel">
        <img src={props.imgSrc}></img>
        <div>{props.text}</div>
    </div>
  )
}
