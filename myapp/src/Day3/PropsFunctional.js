import React from 'react'

export default function default(props) {
  return (
    <div>
      <h1>Hi my name is{props.name} and i am studying at{props.college}</h1>
    </div>
         )
}
default.defaultProps={college:"SKCET"}